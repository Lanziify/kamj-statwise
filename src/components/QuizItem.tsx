import {
    Divider,
    Flex,
    Heading,
    Stack,
    Text,
    StackProps,
} from '@chakra-ui/react'
import moment from 'moment'
import React, { ForwardedRef } from 'react'
import { FaClock, FaHourglass, FaList } from 'react-icons/fa'
import { QuizData } from '../types/data'

type QuizItemProps = StackProps & {
    quiz: QuizData
    onClick?: (quiz: QuizData) => void
}

const QuizItem = React.forwardRef<HTMLDivElement, QuizItemProps>(
    ({ quiz, onClick, ...props }, ref: ForwardedRef<HTMLDivElement>) => {
        return (
            <Stack
                ref={ref}
                key={quiz.id}
                // borderWidth={bordered ? 1 : 0}
                // borderColor='gray.700'
                // rounded='md'
                // padding={4}
                {...props}
                cursor='pointer'
                onClick={() => onClick && onClick(quiz)}
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
                        <Text>{moment(quiz.created_at).format('L')}</Text>
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
        )
    }
)

export default QuizItem
