import React from 'react'
import { useForm } from 'react-hook-form'
import { QuizItemFields } from '../../types/fields'
import {
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
    List,
    ListItem,
    Radio,
    Stack,
} from '@chakra-ui/react'

const AddQuizItemForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<QuizItemFields>({
        defaultValues: {
            questionType: '',
            question: '',
            choices: [],
            answer: '',
        },
    })

    const onSubmit = () => {}

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Stack>
                {/* <FormControl
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
                </FormControl> */}
                <FormControl isInvalid={!!errors.question}>
                    <FormLabel color='white'>Question</FormLabel>
                    <Input
                        {...register('question', {
                            required: 'Please add a question for this item',
                        })}
                        placeholder='Question'
                        color='white'
                        borderColor='gray.600'
                        _focus={{
                            borderColor: 'yellow.500',
                            boxShadow: '0 0 0 2px rgba(255, 255, 0, 0.5)',
                        }}
                    />
                    <FormErrorMessage>
                        {errors.question && errors.question.message}
                    </FormErrorMessage>
                </FormControl>
                <Stack textColor='white'>
                    {[1, 2, 3, 4].map((index) => (
                        // <ListItem listStyleType=''>
                            <Input key={index} placeholder='Option' />
                        // </ListItem>
                    ))}
                </Stack>

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

export default AddQuizItemForm
