import {
    Box,
    Flex,
    Heading,
    IconButton,
    List,
    ListItem,
    Radio,
    Stack,
    Text,
    useToast,
    Wrap,
    WrapItem,
} from '@chakra-ui/react'
import { useLocation } from 'react-router-dom'
import React from 'react'
import useQuiz from '../../hooks/useQuiz'
import { QuizData, QuizItemData } from '../../types/data'
import useQuizItem from '../../hooks/useQuizItem'
import { rdtCustomStyle } from '../../utils/rdt-custom-style'
import DataTable, { TableColumn } from 'react-data-table-component'
import { FaPlus, FaTrash } from 'react-icons/fa'
import ActionButton from '../../components/ActionButton'
import { ActionMenu } from '../../types/props'

type QuizLocation = {
    hash: string
    key: string
    pathname: string
    state: QuizData
}

const QuizItem = () => {
    const location: QuizLocation = useLocation()
    const toast = useToast()

    const quizId =
        location.state?.id ||
        parseInt(
            location.pathname.substring(location.pathname.lastIndexOf('/') + 1)
        )

    const { getQuizItemData, isGetQuizItemLoading, deleteQuizItem } =
        useQuizItem({
            id: quizId,
        })

    const quizItemActions: ActionMenu<QuizItemData>[] = [
        // {
        //     name: 'View Topic',
        //     icon: <FaFileLines size={11} />,
        //     onClick: (quiz) => {
        //         const topic = topics?.filter((t) => t.id === quiz.topic.id)[0]
        //         navigate(`/admin/quizzes/topic/${quiz.topic.title}`, {
        //             state: { ...topic },
        //         })
        //     },
        // },
        // {
        //     name: 'View Quiz Items',
        //     icon: <FaList size={11} />,
        //     onClick: (quiz) => {
        //         navigate(`${quiz.id}`, { state: quiz })
        //     },
        // },
        // {
        //     name: 'Quiz Codes',
        //     icon: <FaKey size={11} />,
        //     onClick: (quiz) => {
        //         onOpen()
        //         setModalContent({
        //             title: 'Quiz Codes',
        //             content: <CodesList quizId={quiz.id} />,
        //         })
        //     },
        // },
        // {
        //     name: 'Set Time Limit',
        //     icon: <FaClock size={11} />,
        //     onClick: () => {},
        // },
        // {
        //     name: 'Set Status',
        //     icon: <FaRegCircleDot size={11} />,
        //     onClick: () => {},
        // },
        {
            name: 'Remove',
            icon: <FaTrash size={11} />,
            onClick: async (item) => {
                try {
                    const response = await deleteQuizItem(item.id)
                    toast({
                        title: response.title,
                        description: response.message,
                        status: 'success',
                        duration: 9000,
                        isClosable: true,
                    })
                } catch (error: any) {
                    console.log(error.message)
                }
            },
        },
    ]

    const columns = React.useMemo<TableColumn<QuizItemData>[]>(
        () => [
            {
                name: 'Question',
                selector: (row) => row.question,
                wrap: true,
            },
            {
                name: 'Choices',
                cell: (row) => (
                    <List>
                        {row.choices.map((choice) => (
                            <ListItem
                                key={choice.id}
                                listStyleType='lower-alpha'
                            >
                                {choice.label}
                            </ListItem>
                        ))}
                    </List>
                ),
                wrap: true,
            },
            {
                grow: 0.5,
                name: 'Answer',
                selector: (row) => row.answer,
                format: (row) => row.choices[row.answer].label,
            },

            {
                width: '3rem',
                right: true,
                cell: (row) => (
                    <ActionButton actions={quizItemActions} row={row} />
                ),
            },
        ],
        []
    )

    React.useEffect(() => {
        if (!location.state) {
            const getTopicFromDb = async () => {
                const id = location.pathname.substring(
                    location.pathname.lastIndexOf('/') + 1
                )
                // const response = await getQuiz(id)
                // console.log(response.data.data)
                // location.state = response.data.data
            }
            getTopicFromDb()
        }
    }, [])

    return (
        <Stack>
            <DataTable
                title={getQuizItemData?.title}
                data={getQuizItemData?.items as QuizItemData[]}
                columns={columns}
                progressPending={isGetQuizItemLoading}
                customStyles={rdtCustomStyle}
            />
            {/* <Heading color='white'>{location.state.title}</Heading>
            <Text color='white' mb={4}>
                {location.state.description}
            </Text>
            {location.state.items.map((item, index) => (
                <Box key={item.id} padding={4} rounded='md'>
                    <Heading color='white' fontSize='2xl' mb={4}>
                        {index + 1}. {item.question}
                    </Heading>
                    <Wrap>
                        {item.choices.map((choice) => (
                            <WrapItem
                                mt={4}
                                ml={8}
                                flex={1}
                                key={choice.id}
                                minW='md'
                                textColor='white'
                                fontStyle='xs'
                            >
                                <Radio colorScheme='yellow'>
                                    {choice.label}
                                </Radio>
                            </WrapItem>
                        ))}
                    </Wrap>
                    <Text mt={4} color='white'>
                        Answer: {item.choices[item.answer].label}
                    </Text>
                </Box>
            ))} */}
        </Stack>
    )
}

export default QuizItem
