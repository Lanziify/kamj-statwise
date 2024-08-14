import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogOverlay,
    Button,
    IconButton,
    ListItem,
    Menu,
    MenuButton,
    MenuGroup,
    MenuItem,
    MenuList,
    Stack,
    Text,
    useDisclosure,
    useToast,
} from '@chakra-ui/react'
import React from 'react'
import {
    IoEllipsisHorizontal,
    IoExtensionPuzzle,
    IoTrashBin,
} from 'react-icons/io5'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { LessonData, TopicData } from '../types/data'
import useLesson from '../hooks/useLesson'

type AccordionListItemType = {
    lesson: LessonData
}

type MenuOption = {
    menu: string
    icon: JSX.Element
    onClick: (data: TopicData) => void
}

const AccordionTopicListItem: React.FC<AccordionListItemType> = ({
    lesson,
}) => {
    const location = useLocation()
    const navigate = useNavigate()
    const { deleteTopicMutation } = useLesson()
    const toast = useToast()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef(null)
    const [deleteItem, setDeleteItem] = React.useState<
        LessonData | TopicData | null
    >(null)

    const topicMenuActions: MenuOption[] = [
        {
            menu: 'Create Quiz',
            icon: <IoExtensionPuzzle />,
            onClick: (topic) => navigate('/admin/quizzes', { state: topic }),
        },
        {
            menu: 'Remove Topic',
            icon: <IoTrashBin />,
            onClick: (topic) => handleDeleteClick(topic),
        },
    ]

    const getLocation = (id: number) => {
        const pathnames = location.pathname.split('/').slice(1)
        if (pathnames.includes('dashboard')) {
            return `/${pathnames[0]}/lessons/topic/${id}`
        }
        return `topic/${id}`
    }

    const handleDeleteClick = (item: LessonData | TopicData) => {
        setDeleteItem(item)
        onOpen()
    }

    const onDeleteItem = async () => {
        try {
            const response = await deleteTopicMutation(deleteItem?.id as number)
            onClose()
            toast({
                title: 'Item deleted',
                description: response?.data.message,
                status: 'success',
                duration: 9000,
                isClosable: true,
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Stack>
            {lesson.topics.map((topic) => (
                <ListItem
                    key={topic.id}
                    sx={{
                        // paddingX: 2,
                        rounded: 'md',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}
                    fontSize='sm'
                >
                    <Button
                        as={NavLink}
                        // display='flex'
                        // justifyContent='flex-start'
                        // textOverflow='ellipsis'
                        color='white'
                        variant='ghost'
                        // whiteSpace='normal'
                        // wordBreak='break-word'
                        size='sm'
                        fontWeight={500}
                        to={getLocation(topic.id)}
                        state={{
                            ...topic,
                        }}
                        _hover={{
                            color: 'whiteAlpha.800',
                            background: 'gray.600',
                        }}
                    >
                        <Text isTruncated>{topic.title}</Text>
                    </Button>
                    <Menu>
                        <MenuButton
                            as={IconButton}
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
                        <MenuList
                            sx={{
                                backgroundColor: 'gray.600',
                                color: 'white',
                                border: '1px solid #2D3748',
                            }}
                        >
                            <MenuGroup title='Actions'>
                                {topicMenuActions.map((action) => (
                                    <MenuItem
                                        key={action.menu}
                                        background='transparent'
                                        _hover={{
                                            color: 'whiteAlpha.800',
                                            backgroundColor: 'gray.500',
                                        }}
                                        icon={action.icon}
                                        onClick={() => action.onClick(topic)}
                                    >
                                        {action.menu}
                                    </MenuItem>
                                ))}
                            </MenuGroup>
                        </MenuList>
                    </Menu>
                </ListItem>
            ))}
            <AlertDialog
                isOpen={isOpen}
                leastDestructiveRef={cancelRef}
                onClose={onClose}
                isCentered
            >
                <AlertDialogOverlay />
                <AlertDialogContent background='gray.700' margin={4}>
                    <AlertDialogHeader color='white' fontSize='md'>
                        Delete Topic
                    </AlertDialogHeader>
                    <AlertDialogBody color='white' fontSize='sm'>
                        Are you sure you want to delete this topic?
                    </AlertDialogBody>
                    <AlertDialogFooter>
                        <Button
                            size='sm'
                            variant='ghost'
                            color='white'
                            ref={cancelRef}
                            onClick={onClose}
                            _hover={{
                                color: 'whiteAlpha.800',
                                backgroundColor: 'gray.600',
                            }}
                        >
                            Cancel
                        </Button>
                        <Button
                            size='sm'
                            colorScheme='red'
                            onClick={onDeleteItem}
                            ml={3}
                        >
                            Delete
                        </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </Stack>
    )
}

export default AccordionTopicListItem
