import React from 'react'
import useQuiz from '../hooks/useQuiz'
import {
    Box,
    Button,
    Flex,
    Heading,
    Skeleton,
    Stack,
    Text,
} from '@chakra-ui/react'
import { QuizData, TopicData } from '../types/data'
import useTopic from '../hooks/useTopic'
import QuizItem from '../components/QuizItem'

const QuizMenuPage = () => {
    const {
        infiniteQuizzes,
        isInifiniteQuizzesLoading,
        fetchNextPage,
        hasNextPage,
    } = useQuiz()

    const { getTopic, isGetTopicLoading } = useTopic()

    const [initialQuizId, setInitialQuizId] = React.useState<number | null>(
        null
    )

    const [selectedQuizItem, setSelectedQuizItem] =
        React.useState<QuizData | null>(null)

    const [siderQuizTopicDetails, setSiderQuizTopicDetails] =
        React.useState<TopicData | null>(null)

    const observer = React.useRef<IntersectionObserver | null>(null)

    const lastElement = React.useCallback(
        (node: HTMLDivElement) => {
            if (observer.current) observer.current.disconnect()

            observer.current = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting && hasNextPage) fetchNextPage()
            })

            if (node) observer.current.observe(node)
        },
        [isGetTopicLoading]
    )

    const selectedQuizItemContainer = React.useRef<HTMLDivElement | null>(null)
    const selectedQuizItemAside = React.useRef<HTMLDivElement | null>(null)

    const getSiderLesson = async (id: number) => {
        try {
            const topicResponse = await getTopic(id)
            setSiderQuizTopicDetails(topicResponse)
        } catch (error) {}
    }

    const isQuizData = (quiz: any): quiz is QuizData => {
        return quiz != null
    }

    const handleItemClick = (
        quiz: QuizData | React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
        if (isQuizData(quiz)) {
            setSelectedQuizItem(quiz)
            getSiderLesson(quiz.topic.id)
        }
    }

    React.useEffect(() => {
        if (!initialQuizId) {
            setSelectedQuizItem(infiniteQuizzes?.pages[0][0] as QuizData)
            setInitialQuizId(infiniteQuizzes?.pages[0][0].topic.id as number)
        }
    }, [infiniteQuizzes])

    React.useEffect(() => {
        if (initialQuizId) {
            getSiderLesson(initialQuizId)
        }
    }, [initialQuizId])

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
                                borderColor='gray.700'
                                style={{
                                    transition: 'all 0.1s ease-in-out',
                                }}
                                _hover={{
                                    background: 'gray.800',
                                }}
                                onClick={handleItemClick}
                            />
                        ))
                    )}
                    {isInifiniteQuizzesLoading && (
                        <Text color='white' textAlign='center'>
                            Loading...
                        </Text>
                    )}
                </Stack>
                {isGetTopicLoading ? (
                    <Skeleton
                        flex={1}
                        rounded='md'
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
                    <Box
                        flex={1}
                        hideBelow='md'
                        maxWidth='50%'
                        maxHeight='calc(100vh - 65px)'
                        borderWidth={1}
                        borderColor='gray.700'
                        rounded='md'
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            position: 'sticky',
                            top: 65,
                            right: 0,
                        }}
                    >
                        {selectedQuizItem && (
                            <Stack
                                ref={selectedQuizItemAside}
                                padding={4}
                                borderBottomWidth={1}
                                borderColor='gray.700'
                                sx={{
                                    top: 0,
                                    right: 0,
                                }}
                            >
                                <QuizItem quiz={selectedQuizItem as QuizData} />
                                <Button
                                    size='sm'
                                    colorScheme='yellow'
                                    width='max-content'
                                >
                                    Play
                                </Button>
                            </Stack>
                        )}
                        {siderQuizTopicDetails && (
                            <Stack p={4} overflowY='auto'>
                                <Heading fontSize='xl' color='white'>
                                    {siderQuizTopicDetails?.title}
                                </Heading>
                                <Box
                                    className='lesson-content-container'
                                    dangerouslySetInnerHTML={{
                                        __html: siderQuizTopicDetails?.content,
                                    }}
                                />
                            </Stack>
                        )}
                    </Box>
                )}
            </Flex>
        </Stack>
    )
}

export default QuizMenuPage
