import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import { useAuth } from '../context/Auth'
import useAxiosInterceptor from './useAxiosInterceptor'
import { QuizFields } from '../types/fields'
import { QuizData } from '../types/data'

const useQuiz = () => {
    const { token } = useAuth()
    const [page, setPage] = React.useState(1)
    const [limit, setLimit] = React.useState(10)
    const [total, setTotal] = React.useState(0)
    const axios = useAxiosInterceptor(token as string)
    const queryClient = useQueryClient()

    const {
        data: quizzes,
        isLoading: isQuizzesLoading,
        isError: isQuizzesError,
        refetch: fetchQuizzes,
    } = useQuery({
        queryKey: ['quizzes', page, limit],
        queryFn: async (): Promise<QuizData[]> => {
            const response = await axios.get(`quizzes`, {
                params: {
                    page: page,
                    limit: limit,
                }
            })
            setTotal(response.data.total)
            return response.data.quizzes
        },
    })

    const onPageChange = (pageIndex: any) => {
        setPage(pageIndex)
        fetchQuizzes()
        // queryClient.invalidateQueries({ queryKey: ['quizzes', page] })
    }

    const onChangeRowsPerPage = (pageLimit: number) => {
        setLimit(pageLimit)
        fetchQuizzes()
        // queryClient.invalidateQueries({
        //     queryKey: ['quizzes', limit],
        // })
    }

    const {
        mutateAsync: getQuiz,
        isPending: isGetQuizLoading,
        isError: isGetQuizError,
    } = useMutation({
        mutationFn: (topicID: string) => {
            return axios.get(`quizzes/${topicID}`)
        },
    })

    const { data: totalQuiz } = useQuery({
        queryKey: ['total'],
        queryFn: async () => {
            return (await axios.get('quizzes/total')).data.total
        },
    })

    const { mutateAsync: addQuiz } = useMutation({
        mutationKey: ['addQuiz'],
        mutationFn: (quiz: QuizFields) => {
            return axios.post('quizzes', { ...quiz })
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['quizzes'] })
        },
    })

    const { mutateAsync: deleteQuiz } = useMutation({
        mutationKey: ['addQuiz'],
        mutationFn: (quiz: QuizData) => {
            return axios.delete(`quizzes/${quiz.id}`)
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['quizzes'] })
        },
    })

    return {
        quizzes,
        isQuizzesLoading,
        isGetQuizLoading,
        isQuizzesError,
        isGetQuizError,
        totalQuiz,
        getQuiz,
        addQuiz,
        deleteQuiz,
        onPageChange,
        onChangeRowsPerPage,
        defaultQuizPage: page,
        totalQuizzes: total,
    }
}

export default useQuiz
