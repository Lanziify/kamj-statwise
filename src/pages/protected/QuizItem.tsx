import {
    Box,
    Flex,
    Heading,
    Input,
    Radio,
    Stack,
    Text,
    Wrap,
    WrapItem,
} from '@chakra-ui/react'
import { useLocation } from 'react-router-dom'
import React from 'react'
import useQuiz from '../../hooks/useQuiz'
import { QuizData } from '../../types/data'

type QuizLocation = {
    hash: string
    key: string
    pathname: string
    state: QuizData
}

const QuizItem = () => {
    const location: QuizLocation = useLocation()
    const { isGetQuizLoading, isGetQuizError, getQuiz } = useQuiz()

    // console.log(location)

    React.useEffect(() => {
        if (!location.state) {
            const getTopicFromDb = async () => {
                const id = location.pathname.substring(
                    location.pathname.lastIndexOf('/') + 1
                )
                const response = await getQuiz(id)
                console.log(response.data.data)
                location.state = response.data.data
            }
            getTopicFromDb()
        }
    }, [])

    if (isGetQuizLoading && !location.state)
        return (
            <Text color='white' fontSize='2xl'>
                Loading...
            </Text>
        )

    if (isGetQuizError) {
        return (
            <Flex
                minHeight='calc(100vh - 80px)'
                padding={6}
                justifyContent='center'
                alignItems='center'
                color='white'
            >
                <Stack>
                    <Heading textAlign='center'>Something went wrong</Heading>
                    <Text>
                        The content you are trying to access cannot be found or
                        does not exist.
                    </Text>
                </Stack>
            </Flex>
        )
    }

    return (
        <Stack>
            <Heading color='white'>{location.state.title}</Heading>
            <Text color='white' mb={4}>
                {location.state.description}
            </Text>
            {location.state.items.map((item, index) => (
                <Box key={item.id} padding={4} rounded='md'>
                    <Heading color='white' fontSize='2xl' mb={4}>
                        {index + 1}. {item.question}
                    </Heading>
                    <Wrap>
                        {item.choices.map((choice) => (
                            <WrapItem
                                mt={4}
                                ml={8}
                                flex={1}
                                key={choice.id}
                                minW='md'
                                textColor='white'
                                fontStyle='xs'
                            >
                                <Radio colorScheme='yellow'>
                                    {choice.label}
                                </Radio>
                            </WrapItem>
                        ))}
                    </Wrap>
                    <Text mt={4} color='white'>
                        Answer: {item.choices[item.answer - 1].label}
                    </Text>
                </Box>
            ))}
        </Stack>
    )
}

export default QuizItem
