import {
    Box,
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    IconButton,
    Input,
    Popover,
    PopoverArrow,
    PopoverBody,
    PopoverContent,
    PopoverHeader,
    PopoverTrigger,
    Portal,
    Select,
    Stack,
    Text,
    Textarea,
    useDisclosure,
    useToast,
} from '@chakra-ui/react'
import React from 'react'
import { Modal } from '../../components/Modal'
import { useForm } from 'react-hook-form'
import { QuizFields } from '../../types/fields'
import { useLocation } from 'react-router-dom'
import useTopic from '../../hooks/useTopic'
import useQuiz from '../../hooks/useQuiz'
import { QuizData } from '../../types/data'

import DataTable, { TableColumn } from 'react-data-table-component'
import { IoEllipsisHorizontal, IoTrashBin } from 'react-icons/io5'
import { FaFileLines, FaPlus } from 'react-icons/fa6'
import { FaClock, FaInfoCircle, FaTrash } from 'react-icons/fa'

type QuizActionProps = {
    name: string
    icon: JSX.Element
    onClick: (data: QuizData) => void
}

const QuizList = () => {
    const location = useLocation()
    const toast = useToast()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { topics, isTopicsLoading } = useTopic()
    const { quizzes, isQuizzesLoading, addQuiz } = useQuiz()

    const quizActions: QuizActionProps[] = [
        {
            name: 'Add Question Item',
            icon: <FaPlus size={11} />,
            onClick: () => {},
        },
        {
            name: 'View Topic',
            icon: <FaFileLines size={11} />,
            onClick: () => {},
        },
        {
            name: 'Set Time Limit',
            icon: <FaClock size={11} />,
            onClick: () => {},
        },
        {
            name: 'Remove',
            icon: <FaTrash size={11} />,
            onClick: () => {},
        },
        {
            name: 'Details',
            icon: <FaInfoCircle size={11} />,
            onClick: () => {},
        },
    ]

    const columns: TableColumn<QuizData>[] = [
        {
            width: 'max-content',
            name: 'Title',
            selector: (row) => row.title,
            sortable: true,
        },
        {
            // hide: 'sm',
            name: 'Description',
            selector: (row) => row.description,
            sortable: true,
            wrap: true,
        },
        {
            grow: 1,
            hide: 'sm',
            center: true,
            name: 'Time Limit',
            selector: (row) => row.time_limit,
            sortable: true,
        },
        {
            width: 'max-content',
            name: 'Actions',
            right: true,
            cell: (row) => (
                <Popover trigger='hover'>
                    <PopoverTrigger>
                        <IconButton
                            size='sm'
                            color='white'
                            variant='ghost'
                            aria-label='option'
                            icon={<IoEllipsisHorizontal />}
                            _hover={{
                                color: 'whiteAlpha.800',
                                backgroundColor: 'gray.600',
                            }}
                            _active={{
                                color: 'whiteAlpha.800',
                                backgroundColor: 'gray.600',
                            }}
                        />
                    </PopoverTrigger>
                    <Portal>
                        <PopoverContent
                            width='fit-content'
                            sx={{
                                backgroundColor: 'gray.900',
                                color: 'white',
                                border: '1px solid #2D3748',
                            }}
                        >
                            {/* <PopoverArrow
                                bg='gray.900'
                                shadowColor='gray.700'
                            /> */}
                            <PopoverHeader
                                fontSize='sm'
                                borderBottomColor='gray.700'
                            >
                                Actions
                            </PopoverHeader>
                            <PopoverBody padding={0}>
                                <Stack spacing={0}>
                                    {quizActions.map((action) => (
                                        <Button
                                            key={action.name}
                                            display='flex'
                                            gap={1}
                                            justifyContent='flex-start'
                                            fontWeight={500}
                                            rounded='unset'
                                            size='sm'
                                            color='white'
                                            background='transparent'
                                            _hover={{
                                                color: 'whiteAlpha.800',
                                                backgroundColor: 'gray.700',
                                            }}
                                            leftIcon={action.icon}
                                            onClick={() => action.onClick(row)}
                                        >
                                            {action.name}
                                        </Button>
                                    ))}
                                </Stack>
                            </PopoverBody>
                            {/* <PopoverFooter>This is the footer</PopoverFooter> */}
                        </PopoverContent>
                    </Portal>
                </Popover>
            ),
            sortable: true,
            // right: true,
            style: {
                textAlign: 'right',
            },
        },
    ]

    const {
        register,
        handleSubmit,
        getValues,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<QuizFields>({
        defaultValues: {
            topic_id: location.state?.id || '',
            title: '',
            description: '',
        },
    })

    const onSubmit = async (values: QuizFields) => {
        try {
            const response = await addQuiz(values)
            toast({
                title: 'Quiz created',
                description: response.data.message,
                status: 'success',
                duration: 9000,
                isClosable: true,
            })
            onClose()
            reset()
            window.history.replaceState({}, '')
        } catch (error) {}
    }

    React.useEffect(() => {
        if (location.state) {
            onOpen()
        }
        window.history.replaceState({}, '')
    }, [location.state])

    if (isTopicsLoading || isQuizzesLoading)
        return <Text color='white'>Loading</Text>

    return (
        <Stack>
            {/* <Heading color='white'>My Quizzes</Heading> */}
            <Box border='1px solid #2D3748' rounded='md'>
                <DataTable
                    title=''
                    columns={columns}
                    data={quizzes as QuizData[]}
                    pagination
                    // onRowClicked={}
                    customStyles={{
                        header: {
                            style: {
                                color: 'white',
                                background: 'transparent',
                            },
                        },
                        table: {
                            style: {
                                background: 'transparent',
                            },
                        },
                        responsiveWrapper: {
                            style: {
                                borderRadius: 0,
                            },
                        },
                        headRow: {
                            style: {
                                color: 'white',
                                background: 'transparent',
                                borderBottom: '1px solid #2D3748',
                            },
                        },
                        rows: {
                            style: {
                                color: 'white',
                                background: 'transparent',
                                '&:not(:last-of-type)': {
                                    borderBottom: '1px solid #2D3748',
                                },
                                '&:last-of-type': {
                                    borderBottom: '1px solid #2D3748',
                                },
                            },
                        },
                        pagination: {
                            style: {
                                color: 'white',
                                background: 'transparent',
                                border: 'unset',
                            },
                            pageButtonsStyle: {
                                color: 'white',
                                '&:disabled': {
                                    cursor: 'unset',
                                    fill: '#2D3748',
                                },
                            },
                        },
                    }}
                />
            </Box>

            <Modal
                title='Create Quiz'
                isOpen={isOpen}
                onClose={onClose}
                isCentered
                closeOnOverlayClick={!isSubmitting}
            >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Stack>
                        <FormControl isInvalid={!!errors.topic_id}>
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
                                    boxShadow:
                                        '0 0 0 2px rgba(255, 255, 0, 0.5)',
                                }}
                                disabled={
                                    getValues('topic_id') === location.state?.id
                                }
                                sx={{
                                    option: {
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
                                    required:
                                        'Please add title or name of the quiz',
                                })}
                                placeholder='Title'
                                color='white'
                                borderColor='gray.600'
                                _focus={{
                                    borderColor: 'yellow.500',
                                    boxShadow:
                                        '0 0 0 2px rgba(255, 255, 0, 0.5)',
                                }}
                            />
                            <FormErrorMessage>
                                {errors.title && errors.title.message}
                            </FormErrorMessage>
                        </FormControl>
                        <FormControl>
                            <FormLabel color='white'>
                                Quiz Description
                            </FormLabel>
                            <Textarea
                                {...register('description')}
                                borderColor='gray.600'
                                color='white'
                                placeholder='Write your topic description here'
                                _focus={{
                                    borderColor: 'yellow.500',
                                    boxShadow:
                                        '0 0 0 2px rgba(255, 255, 0, 0.5)',
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
            </Modal>
        </Stack>
    )
}

export default QuizList
