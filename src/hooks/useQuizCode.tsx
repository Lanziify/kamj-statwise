import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import useAxiosInterceptor from './useAxiosInterceptor'
import { useAuth } from '../context/Auth'
import { QuizData } from '../types/data'

type QuizCodeProp = {
    id: number
}

const useQuizCode = (props?: QuizCodeProp) => {
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
            mutationFn: ({quiz_id, expiration}: {quiz_id: number, expiration: string}) => {
                return axios.post(`quizzes/codes`, { quiz_id: quiz_id, expires_at: expiration })
            },
            onSuccess: () => {
                queryClient.invalidateQueries({
                    queryKey: ['getQuizCode'],
                })
                refetchQuizCode()
            },
        })

    const getQuizCode = async (): Promise<QuizData | void> => {
        return (await axios.get(`quizzes/${props?.id}/codes`)).data
    }

    const {
        data: getQuizCodeData,
        refetch: refetchQuizCode,
        isLoading: isGetQuizCodeLoading,
    } = useQuery({
        queryKey: ['getQuizCode', props?.id],
        queryFn: getQuizCode,
        enabled: false,
    })

    const { mutateAsync: deleteQuizCode } = useMutation({
        mutationFn: async (code_id: number) => {
            return (await axios.delete(`quizzes/codes/${code_id}`)).data
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['getQuizCode'],
            })
            refetchQuizCode()
        },
    })

    React.useEffect(() => {
        if (props?.id) {
            refetchQuizCode()
        }
    }, [props?.id])

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
