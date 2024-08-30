import React from 'react'
import useQuiz from '../hooks/useQuiz'
import {
    Box,
    Button,
    Flex,
    FormControl,
    FormErrorMessage,
    Grid,
    GridItem,
    Heading,
    Input,
    Skeleton,
    Spinner,
    Stack,
    Text,
    useDisclosure,
    useMediaQuery,
} from '@chakra-ui/react'
import { QuizData, TopicData } from '../types/data'
import useTopic from '../hooks/useTopic'
import QuizItem from '../components/QuizItem'
import { FaArrowLeft } from 'react-icons/fa'
import { Modal } from '../components/Modal'
import { useForm } from 'react-hook-form'
import moment from 'moment'
import { useNavigate } from 'react-router-dom'

const QuizMenuPage = () => {
    const {
        infiniteQuizzes,
        isInifiniteQuizzesLoading,
        isInifiniteQuizzesFetching,
        fetchNextPage,
        hasNextPage,
    } = useQuiz()

    const { getTopic, isGetTopicLoading } = useTopic()

    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
        reset,
    } = useForm({
        defaultValues: {
            code: '',
        },
    })

    const { isOpen, onOpen, onClose } = useDisclosure()

    const [isMobile] = useMediaQuery('(max-width: 30em)')

    const [selectedQuizItem, setSelectedQuizItem] =
        React.useState<QuizData | null>(null)

    const [selectedQuizLesson, setSelectedQuizLesson] =
        React.useState<TopicData | null>(null)

    const observer = React.useRef<IntersectionObserver | null>(null)

    const lastElement = React.useCallback(
        (node: HTMLDivElement) => {
            if (observer.current) observer.current.disconnect()

            observer.current = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) fetchNextPage()
            })

            if (node) observer.current.observe(node)
        },
        [isGetTopicLoading]
    )

    const getSiderLesson = async (id: number) => {
        try {
            const topicResponse = await getTopic(id)
            setSelectedQuizLesson(topicResponse)
        } catch (error) {}
    }

    const isQuizData = (quiz: any): quiz is QuizData => {
        return quiz != null
    }

    const isCodesInItem = (quiz: QuizData) => {
        if (quiz.codes.length != 0) return true
        return false
    }

    const navigateToQuiz = () => {
        navigate(`/quizzes/${selectedQuizItem?.id}`, {
            state: {
                allowed: true,
            },
        })
    }

    const handleItemClick = (
        quiz: QuizData | React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
        if (isQuizData(quiz)) {
            // TODO: Fire quiz coode modal directly
            if (isMobile) {
                if (isCodesInItem(quiz)) {
                    onOpen()
                } else {
                    navigateToQuiz()
                }
            }

            setSelectedQuizItem(quiz)
            getSiderLesson(quiz.topic.id)
        }
    }

    const onOpenCodeModal = () => {
        if (selectedQuizItem && isCodesInItem(selectedQuizItem)) {
            onOpen()
        } else {
            navigateToQuiz()
        }
    }

    const handleModalClose = () => {
        reset()
        onClose()
    }

    const checkQuizCode = (value: { code: string }) => {
        const codeItem = selectedQuizItem?.codes.filter(
            (item) => item.code === value.code
        )

        if (typeof codeItem === 'undefined') return

        if (
            codeItem?.length === 0 ||
            moment().isAfter(moment(codeItem[0].expires_at))
        ) {
            return setError('code', { message: 'Code not available' })
        }

        navigate(`/quizzes/${selectedQuizItem?.id}`, {
            state: {
                allowed: true,
                code: codeItem[0],
            },
        })
    }

    if (isInifiniteQuizzesLoading)
        return (
            <center>
                <Spinner color='white' />
            </center>
        )

    return (
        <Stack>
            <Heading color='white' mb={4}>
                Quizzes
            </Heading>
            <Flex gap={2}>
                <Stack flex={1}>
                    {infiniteQuizzes?.pages.map((page) =>
                        page.map((quiz, quizIndex) => (
                            <QuizItem
                                key={quiz.id}
                                quiz={quiz}
                                ref={
                                    quizIndex === page.length - 1
                                        ? lastElement
                                        : null
                                }
                                padding={4}
                                rounded='md'
                                borderWidth={1}
                                borderColor='gray.600'
                                sx={{
                                    backgroundColor: 'gray.800',
                                    transition: 'all 0.1s ease-in-out',
                                }}
                                _hover={{
                                    background: 'gray.700',
                                }}
                                onClick={handleItemClick}
                            />
                        ))
                    )}
                    {isInifiniteQuizzesFetching && (
                        <center>
                            <Spinner color='white' />
                        </center>
                    )}
                </Stack>
                {isGetTopicLoading ? (
                    <Skeleton
                        width='60%'
                        rounded='md'
                        hidden={isMobile}
                        borderWidth={1}
                        startColor='gray.700'
                        endColor='gray.800'
                        maxHeight='calc(100vh - 65px)'
                        sx={{
                            position: 'sticky',
                            top: 65,
                            right: 0,
                        }}
                    />
                ) : (
                    // Right side selected quiz and lesson content
                    <Box
                        // flex={1}
                        hidden={isMobile}
                        width='60%'
                        maxHeight='calc(100vh - 65px)'
                        borderWidth={1}
                        borderColor='gray.600'
                        rounded='md'
                        sx={{
                            backgroundColor: 'gray.800',
                            display: 'flex',
                            flexDirection: 'column',
                            position: 'sticky',
                            top: 65,
                            right: 0,
                        }}
                    >
                        {selectedQuizItem && selectedQuizLesson ? (
                            <>
                                <Stack
                                    padding={4}
                                    borderBottomWidth={1}
                                    borderColor='gray.600'
                                    sx={{
                                        top: 0,
                                        right: 0,
                                    }}
                                >
                                    <Stack>
                                        <Heading color='white'>
                                            {selectedQuizItem.title}
                                        </Heading>
                                        <Text fontSize='xs' color='gray.400'>
                                            {selectedQuizItem.description}
                                        </Text>
                                    </Stack>
                                    <Button
                                        size='sm'
                                        colorScheme='yellow'
                                        width='max-content'
                                        onClick={onOpenCodeModal}
                                    >
                                        Take Quiz
                                    </Button>
                                </Stack>
                                <Stack p={4} overflowY='auto'>
                                    <Heading fontSize='xl' color='white'>
                                        {selectedQuizLesson?.title}
                                    </Heading>
                                    <Box
                                        className='lesson-content-container'
                                        dangerouslySetInnerHTML={{
                                            __html: selectedQuizLesson?.content,
                                        }}
                                    />
                                </Stack>
                            </>
                        ) : (
                            <Grid
                                p={6}
                                column={2}
                                gridTemplateColumns='auto 1fr'
                                gap={2}
                            >
                                <GridItem rowSpan={2}>
                                    <FaArrowLeft
                                        color='white'
                                        style={{ marginTop: 6 }}
                                    />
                                </GridItem>
                                <Heading fontSize='2xl' color='white'>
                                    Select a quiz
                                </Heading>
                                <Text fontSize='xs' color='white'>
                                    Lesson content will display here
                                </Text>
                            </Grid>
                        )}
                    </Box>
                )}
            </Flex>

            <Modal
                title='Enter Code'
                isOpen={isOpen}
                onClose={handleModalClose}
                isCentered
            >
                <form onSubmit={handleSubmit(checkQuizCode)}>
                    <Stack>
                        <FormControl isInvalid={!!errors.code}>
                            <Input
                                {...register('code', {
                                    required: 'Please enter a code',
                                    maxLength: {
                                        value: 8,
                                        message:
                                            'Code should only be 8 characters long',
                                    },
                                    minLength: {
                                        value: 8,
                                        message:
                                            'Code must be at least 8 characters long',
                                    },
                                })}
                                _focus={{
                                    borderColor: 'yellow.500',
                                    boxShadow:
                                        '0 0 0 2px rgba(255, 255, 0, 0.5)',
                                }}
                                _autofill={{
                                    background: 'transparent',
                                }}
                                fontSize='sm'
                                borderColor='gray.700'
                                color='white'
                                placeholder='Code'
                            />
                            <FormErrorMessage>
                                {errors.code && errors.code.message}
                            </FormErrorMessage>
                        </FormControl>
                        <Button type='submit' colorScheme='yellow'>
                            Confirm
                        </Button>
                    </Stack>
                </form>
            </Modal>
        </Stack>
    )
}

export default QuizMenuPage
