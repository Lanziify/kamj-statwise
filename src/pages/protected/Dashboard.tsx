import { Heading, Stack, useToast } from '@chakra-ui/react'
import React from 'react'
import { useAuth } from '../../context/Auth'
import LessonCard from '../../components/LessonCard'
import { LessonFields } from '../../types/fields'
import useLesson from '../../hooks/useLesson'

const Dashboard = () => {
    const { tokenPayload } = useAuth()
    const toast = useToast()
    const lessonCardRef = React.useRef(null)
    const { addLessonMutation, lessons, isLessonLoading } = useLesson()

    const onLessonSubmit = async (data: LessonFields) => {
        try {
            const response = await addLessonMutation(data)
            toast({
                title: 'Lesson Created',
                description: response.data.message,
                status: 'success',
                duration: 9000,
                isClosable: true,
            })
            if (lessonCardRef.current) {
                ;(lessonCardRef.current as any).reset()
                ;(lessonCardRef.current as any).onClose()
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Stack spacing={4}>
            <Heading color='white'>Welcome {tokenPayload?.user.name}!</Heading>
            <LessonCard
                lessons={lessons}
                onSubmit={onLessonSubmit}
                isLoading={isLessonLoading}
                ref={lessonCardRef}
            />
        </Stack>
    )
}

export default Dashboard
