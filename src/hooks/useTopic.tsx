import useAxiosInterceptor from './useAxiosInterceptor'
import { useAuth } from '../context/Auth'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { TopicFields } from '../types/fields'
import { TopicData } from '../types/data'

const useTopic = () => {
    const { token } = useAuth()
    const axios = useAxiosInterceptor(token as string)
    const queryClient = useQueryClient()

    const {
        data: topics,
        error: topicsError,
        isPending: isTopicsLoading,
    } = useQuery({
        queryKey: ['topics'],
        queryFn: async (): Promise<TopicData[]> => {
            return (await axios.get('topics')).data.topics
        },
    })

    const { mutateAsync: getTopic, isPending: isGetTopicLoading, isError: isGetTopicError} = useMutation({
        mutationFn: (topicID: string) => {
            return axios.get(`topics/${topicID}`)
        },
    })

    const { mutateAsync: addTopicMutation } = useMutation({
        mutationKey: ['addTopic'],
        mutationFn: (data: TopicFields) => {
            return axios.post('topics', { ...data })
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['lessons', 'topics'] })
        },
    })

    const { mutateAsync: deleteTopicMutation } = useMutation({
        mutationKey: ['deleteTopic'],
        mutationFn: (id: number) => {
            return axios.delete(`topics/${id}`)
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['lessons', 'topics'] })
        },
    })

    return {
        topics,
        topicsError,
        isTopicsLoading,
        isGetTopicLoading,
        isGetTopicError,
        getTopic,
        addTopicMutation,
        deleteTopicMutation,
    }
}

export default useTopic
