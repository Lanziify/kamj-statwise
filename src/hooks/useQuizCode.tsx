import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import useAxiosInterceptor from './useAxiosInterceptor'
import { useAuth } from '../context/Auth'
import { QuizData } from '../types/data'

type QuizCodeProp = {
    id: number
}

const useQuizCode = ({ id }: QuizCodeProp) => {
    const { token } = useAuth()
    // const [id, setId] = React.useState<number | null>(null)

    const axios = useAxiosInterceptor(token as string)

    const queryClient = useQueryClient()

    const { data: quizCodes, isLoading: isQuizCodesLoading } = useQuery({
        queryKey: ['quizCodes'],
        queryFn: async () => {
            return (await axios.get('quizzes/codes')).data.codes
        },
    })

    const { mutateAsync: generateCode, isPending: isGenerateCodeLoading } =
        useMutation({
            mutationFn: (quiz_id: number | string) => {
                return axios.post(`quizzes/codes`, { quiz_id: quiz_id })
            },
            onSuccess: () => {
                queryClient.invalidateQueries({
                    queryKey: ['getQuizCode'],
                })
            },
        })

    const getQuizCode = async (): Promise<QuizData | void> => {
        return (await axios.get(`quizzes/${id}/codes`)).data
    }

    const { data: getQuizCodeData, isLoading: isGetQuizCodeLoading } = useQuery(
        {
            queryKey: ['getQuizCode', id],
            queryFn: getQuizCode,
        }
    )

    const { mutateAsync: deleteQuizCode } = useMutation({
        mutationFn: async (code_id: number) => {
            return (await axios.delete(`quizzes/codes/${code_id}`)).data
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['getQuizCode'],
            })
        },
    })

    return {
        quizCodes,
        getQuizCodeData,
        isQuizCodesLoading,
        isGenerateCodeLoading,
        isGetQuizCodeLoading,
        generateCode,
        deleteQuizCode,
    }
}

export default useQuizCode
