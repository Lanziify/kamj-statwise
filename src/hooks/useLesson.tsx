import useAxiosInterceptor from './useAxiosInterceptor'
import { useAuth } from '../context/Auth'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { LessonFields } from '../types/fields'
import { LessonData } from '../types/data'

const useLesson = () => {
    const { token } = useAuth()
    const axios = useAxiosInterceptor(token as string)
    const queryClient = useQueryClient()

    const {
        data: lessons,
        error: lessonError,
        isPending: isLessonLoading,
    } = useQuery({
        queryKey: ['lessons'],
        queryFn: async (): Promise<LessonData[]> => {
            return (await axios.get('lessons')).data.lessons
        },
    })

    const { mutateAsync: getLesson, isPending: isGetLessonLoading, isError: isGetLessonError} = useMutation({
        mutationFn: ({ lessonId, topicId }: { lessonId: number; topicId?: number }) => {
            return axios.get(`lessons/${lessonId}}`, {
                params: {
                    topic: topicId
                }
            })
        },
    })

    const { mutateAsync: addLessonMutation } = useMutation({
        mutationKey: ['addLesson'],
        mutationFn: (data: LessonFields) => {
            return axios.post('lessons', { ...data })
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['lessons'] })
        },
    })

    const { mutateAsync: deleteLessonMutation } = useMutation({
        mutationKey: ['deleteLesson'],
        mutationFn: (id: number) => {
            return axios.delete(`lessons/${id}`)
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['lessons'] })
        },
    })

    const { mutateAsync: deleteTopicMutation } = useMutation({
        mutationKey: ['deleteTopic'],
        mutationFn: (id: number) => {
            return axios.delete(`topics/${id}`)
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['lessons'] })
        },
    })

    const { mutateAsync: addTopicMutation } = useMutation({
        mutationKey: ['addTopic'],
        mutationFn: (data: LessonFields) => {
            return axios.post('topics', { ...data })
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['lessons'] })
        },
    })

    return {
        lessons,
        isLessonLoading,
        isGetLessonLoading,
        lessonError,
        isGetLessonError,
        getLesson,
        addLessonMutation,
        addTopicMutation,
        deleteLessonMutation,
        deleteTopicMutation,
    }
}

export default useLesson
