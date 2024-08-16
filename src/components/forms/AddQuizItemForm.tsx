import React, { ChangeEventHandler } from 'react'
import { useForm } from 'react-hook-form'
import { QuizItemFields } from '../../types/fields'
import {
    Button,
    Flex,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
    List,
    ListItem,
    Radio,
    RadioGroup,
    Stack,
    Text,
} from '@chakra-ui/react'
import { QuizData } from '../../types/data'
import useQuizItem from '../../hooks/useQuizItem'

const AddQuizItemForm = ({
    quiz,
    onClose,
}: {
    quiz: QuizData
    onClose: () => void
}) => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<QuizItemFields>({
        defaultValues: {
            question: '',
            choices: [''],
            answer: '',
        },
    })

    const { addQuizItem } = useQuizItem()

    const onSubmit = async (values: QuizItemFields) => {
        await addQuizItem({ quizItem: values, quizId: quiz.id })
        onClose()
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Stack>
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
                    {/* <FormErrorMessage>
                        {errors.question && errors.question.message}
                    </FormErrorMessage> */}
                </FormControl>
                <Stack textColor='white'>
                    <RadioGroup>
                        <List spacing={2}>
                            {Array.from({ length: 4 }).map((_, index) => (
                                <ListItem
                                    ml={5}
                                    listStyleType='lower-alpha'
                                    key={index}
                                >
                                    <Flex gap={4}>
                                        <FormControl
                                            flex={1}
                                            isInvalid={!!errors.choices}
                                            width='fit-content'
                                        >
                                            <Input
                                                {...register(
                                                    `choices.${index}`,
                                                    {
                                                        required: `Please add an option for choice number ${
                                                            index + 1
                                                        }`,
                                                    }
                                                )}
                                                placeholder='Option'
                                                color='white'
                                                borderColor='gray.600'
                                            />
                                        </FormControl>

                                        <FormControl
                                            flex={0}
                                            isInvalid={!!errors.answer}
                                            alignSelf='center'
                                        >
                                            <Radio
                                                {...register('answer', {
                                                    required: true,
                                                })}
                                                value={index.toString()}
                                                verticalAlign='middle'
                                            />
                                        </FormControl>
                                    </Flex>
                                </ListItem>
                            ))}
                        </List>
                    </RadioGroup>
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
