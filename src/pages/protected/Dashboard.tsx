import { Heading, Stack, useToast } from '@chakra-ui/react'
import React from 'react'
import { useAuth } from '../../context/Auth'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import useAxiosInterceptor from '../../hooks/useAxiosInterceptor'
import LessonCard from '../../components/LessonCard'
import TopicCard from '../../components/TopicCard'
import { LessonFields, TopicFields } from '../../types/fields'
import useLessons from '../../hooks/useLessons'

const Dashboard = () => {
    const { token, tokenPayload } = useAuth()
    const queryClient = useQueryClient()
    const toast = useToast()
    const axios = useAxiosInterceptor(token as string)
    const lessonCardRef = React.useRef(null)
    const topicCardRef = React.useRef(null)
    const { addLessonMutation, lessons, isLessonLoading } = useLessons()

    const { mutateAsync: addTopicMutation } = useMutation({
        mutationKey: ['addTopic'],
        mutationFn: (data: LessonFields) => {
            return axios.post('topics', { ...data })
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['lessons'] })
        },
    })

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

    const onTopicSubmit = async (data: TopicFields) => {
        try {
            const response = await addTopicMutation(data)
            toast({
                title: 'Topic Created',
                description: response.data.message,
                status: 'success',
                duration: 9000,
                isClosable: true,
            })
            if (topicCardRef.current) (topicCardRef.current as any).reset()
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

            <TopicCard
                lessons={lessons}
                onSubmit={onTopicSubmit}
                isLoading={isLessonLoading}
                ref={topicCardRef}
            />
        </Stack>
    )
}

export default Dashboard
