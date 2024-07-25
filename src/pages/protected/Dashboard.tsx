import {
    Button,
    Flex,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    Input,
    Stack,
    useDisclosure,
} from '@chakra-ui/react'
import React from 'react'
import { useAuth } from '../../context/Auth'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import useAxiosInterceptor from '../../hooks/useAxiosInterceptor'
import { Modal } from '../../components/Modal'
import { useForm } from 'react-hook-form'
import LessonCard from '../../components/LessonCard'

type LessonFields = {
    title: string
    description: string
}
const Dashboard = () => {
    const { token, tokenPayload } = useAuth()
    const queryClient = useQueryClient()
    const axios = useAxiosInterceptor(token as string)
    const { isOpen, onOpen, onClose } = useDisclosure()

    const {
        data: lessons,
        error,
        isPending,
    } = useQuery({
        queryKey: ['lessons'],
        queryFn: async () => {
            return (await axios.get('lessons')).data.lessons
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

    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
        reset,
    } = useForm({
        defaultValues: {
            title: '',
            description: '',
        },
    })

    const onSubmit = async (data: LessonFields) => {
        try {
            await addLessonMutation(data)
            onClose()
            reset()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Stack spacing={4}>
            <Heading color='white'>Welcome {tokenPayload?.user.name}!</Heading>

            <LessonCard
                lessons={lessons}
                onOpen={onOpen}
                isLoading={isPending}
            />
            <Modal
                title='Add New Lesson'
                isOpen={isOpen}
                onClose={onClose}
                isCentered
                closeOnOverlayClick={!isSubmitting}
            >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Stack spacing={4} color='white'>
                        <FormControl isInvalid={!!errors.title}>
                            <FormLabel fontSize='sm' fontWeight={700}>
                                Title
                            </FormLabel>
                            <Input
                                {...register('title', {
                                    required: 'Title is required',
                                })}
                                type='text'
                                placeholder='Title'
                                _focus={{
                                    borderColor: 'yellow.500',
                                    boxShadow:
                                        '0 0 0 2px rgba(255, 255, 0, 0.5)',
                                }}
                                _autofill={{
                                    background: 'transparent',
                                }}
                                fontSize='sm'
                                borderColor='gray.700'
                            />
                            <FormErrorMessage>
                                {errors.title && errors.title.message}
                            </FormErrorMessage>
                        </FormControl>
                        <FormControl isInvalid={!!errors.description}>
                            <FormLabel fontWeight={700} fontSize='sm'>
                                Description
                            </FormLabel>
                            <Input
                                {...register('description', {
                                    required: 'Description is required',
                                })}
                                type='text'
                                placeholder='Description'
                                _focus={{
                                    borderColor: 'yellow.500',
                                    boxShadow:
                                        '0 0 0 2px rgba(255, 255, 0, 0.5)',
                                }}
                                _autofill={{
                                    background: 'transparent',
                                }}
                                fontSize='sm'
                                borderColor='gray.700'
                            />
                            <FormErrorMessage>
                                {errors.description &&
                                    errors.description.message}
                            </FormErrorMessage>
                        </FormControl>
                        <Flex gap={4} justifyContent='flex-end'>
                            <Button
                                disabled={isSubmitting}
                                color='white'
                                variant=''
                                alignSelf='start'
                                onClick={() => {
                                    onClose()
                                    reset()
                                }}
                            >
                                Cancel
                            </Button>
                            <Button
                                type='submit'
                                disabled={isSubmitting}
                                colorScheme='yellow'
                                alignSelf='start'
                            >
                                Submit
                            </Button>
                        </Flex>
                    </Stack>
                </form>
            </Modal>
        </Stack>
    )
}

export default Dashboard
