import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import useAxiosInterceptor from './useAxiosInterceptor'
import { useAuth } from '../context/Auth'
import { QuizData } from '../types/data'
import { QuizItemFields } from '../types/fields'

type QuizItemProp = {
    id?: number
}

const useQuizItem = (props?: QuizItemProp) => {
    const { token } = useAuth()

    const axios = useAxiosInterceptor(token as string)

    const queryClient = useQueryClient()

    console.log()

    const { data: quizItems, isLoading: isQuizItemsLoading } = useQuery({
        queryKey: ['quizItems'],
        queryFn: async () => {
            // return (await axios.get('quizzes/items')).data.items
        },
        enabled: false,
    })

    const getQuizItem = async (): Promise<QuizData | void> => {
        return (await axios.get(`quizzes/${props && props.id}/items`)).data
    }

    const {
        data: getQuizItemData,
        refetch: refetchQuizItem,
        isLoading: isGetQuizItemLoading,
    } = useQuery({
        queryKey: ['getQuizItem', props && props.id],
        queryFn: getQuizItem,
        enabled: false,
    })

    const { mutateAsync: addQuizItem } = useMutation({
        mutationKey: ['addQuizItem'],
        mutationFn: (item: { quizItem: QuizItemFields; quizId: any }) => {
            return axios.post(`quizzes/${item.quizId}/items`, {
                ...item.quizItem,
            })
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['getQuizItem'],
            })
        },
    })

    const { mutateAsync: deleteQuizItem } = useMutation({
        mutationFn: async (code_id: number) => {
            return (await axios.delete(`quizzes/items/${code_id}`)).data
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['getQuizItem'],
            })
            refetchQuizItem()
        },
    })

    React.useEffect(() => {
        if (props?.id) {
            refetchQuizItem()
        }
    }, [props?.id])

    return {
        quizItems,
        getQuizItemData,
        isQuizItemsLoading,
        isGetQuizItemLoading,
        addQuizItem,
        deleteQuizItem,
    }
}

export default useQuizItem
