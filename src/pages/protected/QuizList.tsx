import {
    Box,
    Flex,
    Heading,
    IconButton,
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
import { FaFileLines, FaKey, FaPlus, FaRegCircleDot } from 'react-icons/fa6'
import { FaClock, FaInfoCircle, FaList, FaTrash } from 'react-icons/fa'
import { rdtCustomStyle } from '../../utils/rdt-custom-style'
import CreateQuizForm from '../../components/forms/CreateQuizForm'
import AddQuizItemForm from '../../components/forms/AddQuizItemForm'
import CodesList from '../../components/CodesList'
import { ActionMenu } from '../../types/props'
import ActionButton from '../../components/ActionButton'

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

    const quizActions: ActionMenu<QuizData>[] = [
        {
            name: 'Add Item',
            icon: <FaPlus size={11} />,
            onClick: (row) => {
                setModalContent({
                    title: 'Add Quiz Item',
                    content: <AddQuizItemForm quiz={row} onClose={onClose}/>,
                })
                onOpen()
            },
        },
        {
            name: 'View Topic',
            icon: <FaFileLines size={11} />,
            onClick: (quiz) => {
                const topic = topics?.filter((t) => t.id === quiz.topic.id)[0]
                navigate(`/admin/quizzes/topic/${quiz.topic.title}`, {
                    state: { ...topic },
                })
            },
        },
        {
            name: 'View Quiz Items',
            icon: <FaList size={11} />,
            onClick: (quiz) => {
                navigate(`${quiz.id}`, { state: quiz })
            },
        },
        {
            name: 'Quiz Codes',
            icon: <FaKey size={11} />,
            onClick: (quiz) => {
                onOpen()
                setModalContent({
                    title: 'Quiz Codes',
                    content: <CodesList quizId={quiz.id} />,
                })
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
                cell: (row) => <ActionButton actions={quizActions} row={row} />,
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
