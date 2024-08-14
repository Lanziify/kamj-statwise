import React from 'react'
import { useForm } from 'react-hook-form'
import { QuizFields } from '../../types/fields'
import useQuiz from '../../hooks/useQuiz'
import { TopicData } from '../../types/data'
import {
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
    Select,
    Stack,
    Textarea,
    useToast,
} from '@chakra-ui/react'
import useTopic from '../../hooks/useTopic'

type CreateQuizFormProps = {
    topicState?: TopicData
    onClose: () => void
    isSubmitting: (value: boolean) => void
}

const CreateQuizForm: React.FC<CreateQuizFormProps> = (props) => {
    const { addQuiz } = useQuiz()
    const { topics } = useTopic()
    const toast = useToast()
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<QuizFields>({
        defaultValues: {
            topic_id: props.topicState?.id || '',
            title: '',
            description: '',
        },
    })

    const onSubmit = async (values: QuizFields) => {
        try {
            const response = await addQuiz(values)
            toast({
                title: response.data.title,
                description: response.data.message,
                status: 'success',
                duration: 9000,
                isClosable: true,
            })
            props.onClose()
            reset()
        } catch (error) {}
    }

    React.useEffect(() => {
        props.isSubmitting(isSubmitting)
    }, [isSubmitting])

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Stack>
                <FormControl
                    isInvalid={!!errors.topic_id}
                    // hidden={getValues('topic_id') === props.topicState?.id}
                >
                    <FormLabel color='white'>Topic</FormLabel>
                    <Select
                        {...register('topic_id', {
                            required: 'Please select a topic',
                        })}
                        placeholder='Select a topic'
                        color='white'
                        borderColor='gray.600'
                        _focus={{
                            borderColor: 'yellow.500',
                            boxShadow: '0 0 0 2px rgba(255, 255, 0, 0.5)',
                        }}
                        sx={{
                            option: {
                                width: 'md',
                                borderColor: 'gray.700',
                                backgroundColor: 'gray.800',
                            },
                        }}
                    >
                        {topics?.map((topic) => (
                            <option key={topic.id} value={topic.id}>
                                {topic.title}
                            </option>
                        ))}
                    </Select>
                    <FormErrorMessage>
                        {errors.topic_id && errors.topic_id.message}
                    </FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={!!errors.title}>
                    <FormLabel color='white'>Quiz Title</FormLabel>
                    <Input
                        {...register('title', {
                            required: 'Please add title or name of the quiz',
                        })}
                        placeholder='Title'
                        color='white'
                        borderColor='gray.600'
                        _focus={{
                            borderColor: 'yellow.500',
                            boxShadow: '0 0 0 2px rgba(255, 255, 0, 0.5)',
                        }}
                    />
                    <FormErrorMessage>
                        {errors.title && errors.title.message}
                    </FormErrorMessage>
                </FormControl>
                <FormControl>
                    <FormLabel color='white'>Quiz Description</FormLabel>
                    <Textarea
                        {...register('description')}
                        borderColor='gray.600'
                        color='white'
                        placeholder='Write your topic description here'
                        _focus={{
                            borderColor: 'yellow.500',
                            boxShadow: '0 0 0 2px rgba(255, 255, 0, 0.5)',
                        }}
                    />
                </FormControl>
                <Button
                    type='submit'
                    colorScheme='yellow'
                    isLoading={isSubmitting}
                >
                    Submit
                </Button>
            </Stack>
        </form>
    )
}

export default CreateQuizForm
