import React from 'react'
import { LessonData, TopicData } from '../types/data'
import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    AlertDialog,
    AlertDialogBody,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogOverlay,
    Box,
    Button,
    IconButton,
    List,
    ListItem,
    Menu,
    MenuButton,
    MenuGroup,
    MenuItem,
    MenuList,
    Stack,
    useDisclosure,
    useToast,
} from '@chakra-ui/react'
import { NavLink, useLocation } from 'react-router-dom'
import { IoEllipsisHorizontal, IoTrashBin } from 'react-icons/io5'
import useLessons from '../hooks/useLessons'

type LessonAccordionType = {
    lessons: LessonData[] | undefined
}

const LessonsAccordion: React.FC<LessonAccordionType> = (props) => {
    const location = useLocation()
    const { deleteTopicMutation } = useLessons()
    const toast = useToast()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef(null)
    const [deleteItemId, setDeleteItemId] = React.useState<number | null>(null)

    const getLocation = (topic: string) => {
        const pathnames = location.pathname.split('/').slice(1)
        if (pathnames.includes('dashboard')) {
            return `/${pathnames[0]}/lessons/${topic}`
        }
        return topic
    }

    const handleDeleteClick = (lesson: TopicData) => {
        setDeleteItemId(lesson?.id)
        onOpen()
    }

    const onDeleTopic = async () => {
        try {
            const response = await deleteTopicMutation(deleteItemId as number)
            onClose()
            toast({
                title: 'Topic deleted',
                description: response.data.message,
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
            {props.lessons &&
                props.lessons.map((lesson: LessonData) => (
                    <Accordion key={lesson.id} allowMultiple>
                        <AccordionItem
                            border='none'
                            rounded='md'
                            background='gray.700'
                        >
                            <AccordionButton>
                                <Box
                                    as='span'
                                    flex={1}
                                    textAlign='left'
                                    fontWeight={500}
                                >
                                    {lesson.title}
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            <AccordionPanel>
                                <List>
                                    {lesson.topics &&
                                        lesson.topics.map((topic) => (
                                            <ListItem
                                                key={topic.id}
                                                sx={{
                                                    paddingX: 2,
                                                    rounded: 'md',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent:
                                                        'space-between',
                                                }}
                                                fontSize='sm'
                                                // _hover={{
                                                //     background: 'gray.600',
                                                // }}
                                            >
                                                <Button
                                                    as={NavLink}
                                                    color='white'
                                                    variant='ghost'
                                                    size='sm'
                                                    fontWeight={500}
                                                    to={getLocation(
                                                        topic.title
                                                    )}
                                                    state={{
                                                        ...topic,
                                                    }}
                                                    _hover={{
                                                        color: 'whiteAlpha.800',
                                                        background: 'gray.600',
                                                    }}
                                                >
                                                    {topic.title}
                                                </Button>
                                                <Menu>
                                                    <MenuButton
                                                        as={IconButton}
                                                        size='sm'
                                                        color='white'
                                                        variant='ghost'
                                                        aria-label='option'
                                                        icon={
                                                            <IoEllipsisHorizontal />
                                                        }
                                                        _hover={{
                                                            color: 'whiteAlpha.800',
                                                            backgroundColor:
                                                                'gray.600',
                                                        }}
                                                        _active={{
                                                            color: 'whiteAlpha.800',
                                                            backgroundColor:
                                                                'gray.600',
                                                        }}
                                                    />
                                                    <MenuList
                                                        sx={{
                                                            backgroundColor:
                                                                'gray.600',
                                                            color: 'white',
                                                            border: '1px solid #2D3748',
                                                        }}
                                                    >
                                                        <MenuGroup title='Actions'>
                                                            <MenuItem
                                                                background='transparent'
                                                                _hover={{
                                                                    color: 'whiteAlpha.800',
                                                                }}
                                                                icon={
                                                                    <IoTrashBin />
                                                                }
                                                                onClick={() =>
                                                                    handleDeleteClick(
                                                                        topic
                                                                    )
                                                                }
                                                            >
                                                                Delete
                                                            </MenuItem>
                                                        </MenuGroup>
                                                    </MenuList>
                                                </Menu>
                                            </ListItem>
                                        ))}
                                </List>
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                ))}
            <AlertDialog
                isOpen={isOpen}
                leastDestructiveRef={cancelRef}
                onClose={onClose}
                isCentered
            >
                <AlertDialogOverlay />
                <AlertDialogContent background='gray.700'>
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
                            onClick={onDeleTopic}
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

export default LessonsAccordion
