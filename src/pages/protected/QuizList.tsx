import {
    Box,
    Button,
    Flex,
    Heading,
    IconButton,
    Popover,
    PopoverBody,
    PopoverContent,
    PopoverHeader,
    PopoverTrigger,
    Portal,
    Stack,
    useDisclosure,
    useToast,
} from '@chakra-ui/react'
import React from 'react'
import { Modal } from '../../components/Modal'
import { useLocation, useNavigate } from 'react-router-dom'
import useTopic from '../../hooks/useTopic'
import useQuiz from '../../hooks/useQuiz'
import { QuizData } from '../../types/data'

import DataTable, { TableColumn } from 'react-data-table-component'
import { IoEllipsisHorizontal } from 'react-icons/io5'
import { FaFileLines, FaPlus, FaRegCircleDot } from 'react-icons/fa6'
import { FaClock, FaInfoCircle, FaList, FaTrash } from 'react-icons/fa'
import { rdtCustomStyle } from '../../utils/rdt-custom-style'
import CreateQuizForm from '../../components/forms/CreateQuizForm'

type QuizActionProps = {
    name: string
    icon: JSX.Element
    onClick: (data: QuizData) => void
}

type ModalContent = {
    title: string
    content: JSX.Element
}

const QuizList = () => {
    const location = useLocation()
    const [isSubmitting, setIsSubmitting] = React.useState(false)
    const [modalContent, setModalContent] = React.useState<ModalContent | null>(
        null
    )
    const toast = useToast()
    const navigate = useNavigate()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { topics } = useTopic()
    const {
        quizzes,
        isQuizzesLoading,
        deleteQuiz,
        onPageChange,
        onChangeRowsPerPage,
        defaultQuizPage,
        totalQuizzes,
    } = useQuiz()

    const quizActions: QuizActionProps[] = [
        {
            name: 'Add Question Item',
            icon: <FaPlus size={11} />,
            onClick: () => {},
        },
        {
            name: 'View Topic',
            icon: <FaFileLines size={11} />,
            onClick: (quiz) => {
                const topic = topics?.filter((t) => t.id === quiz.topic.id)[0]
                navigate(`/admin/quizzes/topic/${quiz.topic.id}`, {
                    state: { ...topic },
                })
            },
        },
        {
            name: 'View Quiz Items',
            icon: <FaList size={11} />,
            onClick: (quiz) => {
                navigate(`${quiz.id}`, {state: quiz})
            },
        },
        {
            name: 'Set Time Limit',
            icon: <FaClock size={11} />,
            onClick: () => {},
        },
        {
            name: 'Set Status',
            icon: <FaRegCircleDot size={11} />,
            onClick: () => {},
        },
        {
            name: 'Remove',
            icon: <FaTrash size={11} />,
            onClick: async (quiz) => {
                try {
                    const response = await deleteQuiz(quiz)
                    toast({
                        title: response.data.title,
                        description: response.data.message,
                        status: 'success',
                        duration: 9000,
                        isClosable: true,
                    })
                } catch (error: any) {
                    console.log(error.message)
                }
            },
        },
        {
            name: 'Details',
            icon: <FaInfoCircle size={11} />,
            onClick: () => {
                onOpen()
            },
        },
    ]

    const columns = React.useMemo<TableColumn<QuizData>[]>(
        () => [
            {
                // grow: 0,
                name: 'Title',
                selector: (row) => row.title,
                sortable: true,
                wrap: true,
            },
            {
                // width: 'max-content',
                name: 'Topic',
                wrap: true,
                selector: (row) => row.topic.title,
                sortable: true,
            },
            {
                hide: 'sm',
                name: 'Description',
                selector: (row) => row.description,
                sortable: true,
                wrap: true,
            },
            {
                grow: 1,
                hide: 'md',
                center: true,
                name: 'Time Limit',
                selector: (row) => row.time_limit,
                sortable: true,
            },
            {
                grow: 1,
                hide: 'sm',
                center: true,
                name: 'Active',
                selector: (row) => row.active,
                cell: (row) => (
                    <Box
                        padding={2}
                        rounded='full'
                        bg={row.active ? 'green.500' : 'gray.600'}
                    />
                ),
                sortable: true,
            },
            {
                grow: 0,
                // width: 'max-content',
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
                                                onClick={() =>
                                                    action.onClick(row)
                                                }
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
        ],
        []
    )

    const onIsSubmitting = (value: boolean) => setIsSubmitting(value)

    const TableHeader = () => {
        return (
            <Flex justifyContent='space-between' alignItems='center'>
                <Heading>My Quizzes</Heading>
                <IconButton
                    size='sm'
                    colorScheme='yellow'
                    aria-label='lesson-add'
                    color='gray.800'
                    icon={<FaPlus />}
                    onClick={() => {
                        delete location.state
                        setModalContent({
                            title: 'New Quiz',
                            content: (
                                <CreateQuizForm
                                    onClose={onClose}
                                    isSubmitting={onIsSubmitting}
                                />
                            ),
                        })
                        // reset()
                        onOpen()
                    }}
                />
            </Flex>
        )
    }

    React.useEffect(() => {
        if (location.state) {
            setModalContent({
                title: 'New Quiz',
                content: (
                    <CreateQuizForm
                        topicState={location.state}
                        onClose={onClose}
                        isSubmitting={onIsSubmitting}
                    />
                ),
            })
            onOpen()
        }
        window.history.replaceState({}, '')
    }, [location.state])

    return (
        <Stack>
            <Box border='1px solid #2D3748' rounded='md'>
                <DataTable
                    title={<TableHeader />}
                    columns={columns}
                    data={quizzes as QuizData[]}
                    progressPending={isQuizzesLoading}
                    pagination
                    paginationServer
                    paginationRowsPerPageOptions={[
                        10, 25, 50, 100, 200, 250, 500,
                    ]}
                    paginationDefaultPage={defaultQuizPage}
                    onChangePage={onPageChange}
                    onChangeRowsPerPage={onChangeRowsPerPage}
                    paginationTotalRows={totalQuizzes}
                    customStyles={rdtCustomStyle}
                />
            </Box>

            <Modal
                title={modalContent?.title}
                isOpen={isOpen}
                onClose={onClose}
                isCentered
                closeOnOverlayClick={!isSubmitting}
            >
                {modalContent?.content}
            </Modal>
        </Stack>
    )
}

export default QuizList
