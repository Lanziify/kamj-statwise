import {
    Divider,
    Heading,
    Stack,
    Stat,
    StatGroup,
    StatLabel,
    StatNumber,
    Text,
} from '@chakra-ui/react'
import React from 'react'
import { useAuth } from '../../context/Auth'
import useLesson from '../../hooks/useLesson'
import useTopic from '../../hooks/useTopic'
import useQuiz from '../../hooks/useQuiz'
import useQuizCode from '../../hooks/useQuizCode'

const Dashboard = () => {
    const { tokenPayload } = useAuth()
    const { lessons } = useLesson()
    const { topics } = useTopic()
    const { totalQuiz } = useQuiz()
    const { quizCodes } = useQuizCode()

    const stats = [
        {
            label: 'Lessons',
            number: lessons?.length || 0,
        },
        {
            label: 'Topics',
            number: topics?.length || 0,
        },
        {
            label: 'Quizzes',
            number: totalQuiz || 0,
        },
        {
            label: 'Codes',
            number: quizCodes?.length || 0,
        },
    ]

    return (
        <Stack spacing={4}>
            <Heading color='white'>Welcome {tokenPayload?.user.name}!</Heading>
            <StatGroup gap={4}>
                {stats.map((stats) => (
                    <Stat
                        key={stats.label}
                        color='white'
                        borderWidth={1}
                        borderColor='gray.600'
                        borderRadius='md'
                        padding={2}
                    >
                        <StatLabel>{stats.label}</StatLabel>
                        <StatNumber>{stats.number}</StatNumber>
                    </Stat>
                ))}
            </StatGroup>
        </Stack>
    )
}

export default Dashboard
