import {
    useInfiniteQuery,
    useMutation,
    useQuery,
    useQueryClient,
} from '@tanstack/react-query'
import React from 'react'
import { useAuth } from '../context/Auth'
import useAxiosInterceptor from './useAxiosInterceptor'
import { QuizFields, QuizItemFields } from '../types/fields'
import { QuizData } from '../types/data'

const useQuiz = () => {
    const { token } = useAuth()
    const [page, setPage] = React.useState(1)
    const [limit, setLimit] = React.useState(10)
    const axios = useAxiosInterceptor(token as string)
    const queryClient = useQueryClient()

    const {
        data: quizzes,
        isLoading: isQuizzesLoading,
        isError: isQuizzesError,
    } = useQuery({
        queryKey: ['quizzes', page, limit],
        queryFn: async (): Promise<QuizData[]> => {
            const response = await axios.get(`quizzes`, {
                params: {
                    page: page,
                    limit: limit,
                },
            })
            return response.data.quizzes
        },
    })

    const {
        data: infiniteQuizzes,
        isLoading: isInifiniteQuizzesLoading,
        isFetching: isInifiniteQuizzesFetching,
        fetchNextPage,
        hasNextPage
    } = useInfiniteQuery({
        queryKey: ['infiniteQuizzes'],
        queryFn: async ({ pageParam }: { pageParam: number }): Promise<QuizData[]> => {
            const response = await axios.get(`quizzes`, {
                params: {
                    page: pageParam,
                    active: 1,
                },
            })
            return response.data.quizzes
        },
        initialPageParam: 1,
        getNextPageParam: (lastPage, pages) => {
            if (lastPage.length === 0) {
                return undefined;
            }
            return pages.length + 1
        },
    })

    const onPageChange = (pageIndex: any) => {
        setPage(pageIndex)
    }

    const onChangeRowsPerPage = (pageLimit: number) => {
        setLimit(pageLimit)
    }

    const {
        mutateAsync: getQuiz,
        isPending: isGetQuizLoading,
        isError: isGetQuizError,
    } = useMutation({
        mutationFn: (id: number) => {
            return axios.get(`quizzes/${id}`)
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
        infiniteQuizzes,
        isQuizzesLoading,
        isInifiniteQuizzesLoading,
        isInifiniteQuizzesFetching,
        isGetQuizLoading,
        isQuizzesError,
        isGetQuizError,
        totalQuiz,
        fetchNextPage,
        hasNextPage,
        getQuiz,
        addQuiz,
        deleteQuiz,
        onPageChange,
        onChangeRowsPerPage,
        defaultQuizPage: page,
    }
}

export default useQuiz
