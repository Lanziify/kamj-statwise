import React from 'react'
import useQuiz from '../hooks/useQuiz'
import {
    Box,
    Button,
    Divider,
    Flex,
    Heading,
    List,
    ListItem,
    Stack,
    Text,
} from '@chakra-ui/react'
import { ActionMenu } from '../types/props'
import { QuizData } from '../types/data'
import { FaClock, FaHourglass, FaList } from 'react-icons/fa'
import moment from 'moment'

const QuizMenuPage = () => {
    const { infiniteQuizzes, fetchNextPage } = useQuiz()

    return (
        <Flex gap={2}>
            <Stack>
                {infiniteQuizzes?.pages.map((page: QuizData[]) =>
                    page.map((quiz) => (
                        <Stack
                            key={quiz.id}
                            borderWidth={1}
                            borderColor='gray.700'
                            rounded='md'
                            padding={4}
                            cursor='pointer'
                            _hover={{
                                background: 'whiteAlpha.50',
                            }}
                        >
                            <Heading color='white' fontSize='xl'>
                                {quiz.title}
                            </Heading>

                            <Flex gap={1} width='max-content'>
                                <Flex
                                    color='gray.400'
                                    fontSize='xs'
                                    alignItems='center'
                                    gap={1}
                                >
                                    <FaClock />
                                    <Text>
                                        {moment(quiz.created_at).format('L')}
                                    </Text>
                                </Flex>
                                <Divider
                                    orientation='vertical'
                                    alignSelf='stretch'
                                    height='auto'
                                />
                                <Flex
                                    color='gray.400'
                                    fontSize='xs'
                                    alignItems='center'
                                    gap={1}
                                >
                                    <FaList />
                                    <Text>{quiz.items.length}</Text>
                                </Flex>
                                <Divider
                                    orientation='vertical'
                                    alignSelf='stretch'
                                    height='auto'
                                />
                                <Flex
                                    color='gray.400'
                                    fontSize='xs'
                                    alignItems='center'
                                    gap={1}
                                >
                                    <FaHourglass />
                                    <Text>{quiz.time_limit}</Text>
                                </Flex>
                            </Flex>

                            <Text color='gray.400' fontSize='xs'>
                                {quiz.description}
                            </Text>
                        </Stack>
                    ))
                )}
                <Button
                    width='fit-content'
                    m='auto'
                    color='white'
                    size='sm'
                    variant='ghost'
                    onClick={() => fetchNextPage()}
                    _hover={{
                      backgroundColor: 'whiteAlpha.100',
                    }}
                >
                    Load More
                </Button>
            </Stack>
            <Box
                width='100%'
                hideBelow='md'
                // maxWidth='2xl'
                maxHeight='calc(100vh - 65px)'
                alignSelf='stretch'
                borderWidth={1}
                borderColor='gray.700'
                rounded='md'
                sx={{
                    position: 'sticky',
                    top: 65,
                    right: 0,
                }}
            ></Box>
        </Flex>
    )
}

export default QuizMenuPage
