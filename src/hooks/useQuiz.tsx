import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import { useAuth } from '../context/Auth'
import useAxiosInterceptor from './useAxiosInterceptor'
import { QuizFields } from '../types/fields'
import { QuizData } from '../types/data'

const useQuiz = () => {
    const { token } = useAuth()
    const axios = useAxiosInterceptor(token as string)
    const queryClient = useQueryClient()

    const {
        data: quizzes,
        isLoading: isQuizzesLoading,
        error: quizzesError,
    } = useQuery({
        queryKey: ['quizzes'],
        queryFn: async (): Promise<QuizData[]> => {
            return (await axios.get('quizzes')).data.quizzes
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

    return { quizzes, isQuizzesLoading, quizzesError, addQuiz }
}

export default useQuiz
