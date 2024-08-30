import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import useQuiz from '../hooks/useQuiz'
import { QuizCodeData, QuizData } from '../types/data'
import {
    Box,
    Button,
    Flex,
    Heading,
    Radio,
    RadioGroup,
    ScaleFade,
    Spinner,
    Stack,
    Text,
    useDisclosure,
} from '@chakra-ui/react'
import moment from 'moment'
import useQuizForm from '../hooks/useQuizForm'
import { Controller, useForm } from 'react-hook-form'
import { Modal } from '../components/Modal'

interface FormValues {
    answer: string[]
}

const QuizPage = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const [quiz, setQuiz] = React.useState<QuizData | null>(null)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { index, onNext, onPrevious, resetIndex } = useQuizForm()
    const [quizScore, setQuizScore] = React.useState(0)

    const { control, getFieldState, handleSubmit, reset, setValue } =
        useForm<FormValues>({
            defaultValues: {
                answer: [],
            },
        })

    const { getQuiz, isGetQuizLoading } = useQuiz()

    const id = location.pathname.substring(
        location.pathname.lastIndexOf('/') + 1
    )

    const isCodeExpire = (code: QuizCodeData): boolean =>
        moment().isAfter(moment(code.expires_at)) ? true : false

    const handleNextClick = () => {
        const currentQuestion = getFieldState(`answer.${index}`)

        if (currentQuestion.isDirty) onNext()
    }

    const handleTryAgainClick = () => {
        resetIndex()
        reset()
        quiz?.items.forEach((_, index) => setValue(`answer.${index}`, ''))
        onClose()
    }

    const getQuizScore = (values: { answer: string[] }) => {
        const answerKey = quiz?.items.map((item) => item.answer)
        const answer = values.answer.map((answer) => Number(answer))

        let score = 0

        if (answerKey) {
            for (let i = 0; i < values.answer.length; i++) {
                if (answer[i] === answerKey[i]) score += 1
            }
        }
        setQuizScore(score)

        onOpen()
    }

    React.useEffect(() => {
        try {
            getQuiz(Number(id)).then((quiz) => {
                setQuiz(quiz.data.data)
            })
        } catch (error) {}
    }, [location])

    if (
        !location.state ||
        !location.state.allowed ||
        (location.state.code && isCodeExpire(location.state.code))
    )
        return (
            <center>
                <Heading color='white' fontSize='2xl'>
                    Oops! Quiz cannot be access at this moment
                </Heading>
                <Text color='gray.400' fontSize='sm'>
                    There was an error while loading the quiz. Return to select
                    a quiz to take.
                </Text>
            </center>
        )

    if (isGetQuizLoading)
        return (
            <center>
                <Spinner color='white' />
            </center>
        )

    return (
        <Stack>
            <Box height='100%'>
                {quiz?.items.map((item, i) => (
                    <Stack
                        as={ScaleFade}
                        hidden={i != index}
                        in={i === index}
                        initialScale={0.9}
                        key={i}
                        gap={4}
                    >
                        <Box
                            display='flex'
                            alignItems='center'
                            justifyContent='center'
                            aspectRatio={3}
                            // overflowWrap='break-word'
                            wordBreak='break-word'
                        >
                            <Heading color='white'>{item.question}</Heading>
                        </Box>
                        <Controller
                            name={`answer.${i}`}
                            control={control}
                            rules={{ required: 'Please select a choice' }}
                            render={({ field }) => (
                                <RadioGroup {...field}>
                                    <Box
                                        display='grid'
                                        gridTemplateColumns={{
                                            sm: 'repeat(2, minmax(0, 1fr))',
                                            lg: 'repeat(2, minmax(0, 1fr))',
                                        }}
                                        gap={4}
                                    >
                                        {item.choices.map((choice, j) => (
                                            <Box
                                                key={j}
                                                flex={1}
                                                rounded='md'
                                                background='gray.700'
                                                color='white'
                                            >
                                                <Radio
                                                    colorScheme='yellow'
                                                    width='100%'
                                                    height='100%'
                                                    padding={4}
                                                    value={String(j)}
                                                >
                                                    {choice.label}
                                                </Radio>
                                            </Box>
                                        ))}
                                    </Box>
                                </RadioGroup>
                            )}
                        />
                    </Stack>
                ))}
            </Box>
            <Flex justifyContent='space-between'>
                <Button
                    visibility={index === 0 ? 'hidden' : 'visible'}
                    alignSelf='flex-end'
                    onClick={onPrevious}
                >
                    Back
                </Button>
                {quiz && index < quiz.items.length - 1 ? (
                    <Button alignSelf='flex-end' onClick={handleNextClick}>
                        Next
                    </Button>
                ) : (
                    <Button
                        alignSelf='flex-end'
                        colorScheme='yellow'
                        onClick={handleSubmit(getQuizScore)}
                    >
                        Submit
                    </Button>
                )}
            </Flex>
            <Modal
                title='Your Score'
                isOpen={isOpen}
                onClose={onClose}
                showCloseButton={false}
                closeOnEsc={false}
                closeOnOverlayClick={false}
                isCentered
            >
                <Stack spacing={6}>
                    <Heading color='white' textAlign='center'>
                        {quizScore} / {quiz?.items.length}
                    </Heading>
                    <Flex gap={4} justifyContent='flex-end'>
                        <Button
                            size='sm'
                            colorScheme=''
                            onClick={() => navigate('/quizzes')}
                        >
                            Return
                        </Button>
                        <Button
                            size='sm'
                            colorScheme='yellow'
                            onClick={handleTryAgainClick}
                        >
                            Try again
                        </Button>
                    </Flex>
                </Stack>
            </Modal>
        </Stack>
    )
}

export default QuizPage
