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

const Dashboard = () => {
    const { tokenPayload } = useAuth()
    const { lessons } = useLesson()
    const { topics } = useTopic()
    const { totalQuiz } = useQuiz()

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
            <Divider />
            <Heading as='h2' color='white' fontSize='2xl'>
                Recently Added
            </Heading>
            <Text color='gray.400' fontSize='sm'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Adipisci eius placeat error, labore, nihil architecto ducimus
                laborum eum minus dolor, ipsam fugit neque libero beatae est vel
                modi soluta voluptatibus nisi alias praesentium nulla quisquam
                ullam! Ab suscipit ipsum blanditiis, delectus quaerat eos nulla
                mollitia quam! Hic tempora explicabo corrupti.
            </Text>
        </Stack>
    )
}

export default Dashboard
