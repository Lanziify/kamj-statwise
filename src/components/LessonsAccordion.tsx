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
    Divider,
    Flex,
    IconButton,
    List,
    ListItem,
    Menu,
    MenuButton,
    MenuGroup,
    MenuItem,
    MenuList,
    Popover,
    PopoverCloseButton,
    PopoverContent,
    PopoverHeader,
    PopoverTrigger,
    Stack,
    Text,
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
    const { deleteLessonMutation, deleteTopicMutation } = useLessons()
    const toast = useToast()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef(null)
    const [deleteItem, setDeleteItem] = React.useState<
        LessonData | TopicData | null
    >(null)

    const getLocation = (topic: string) => {
        const pathnames = location.pathname.split('/').slice(1)
        if (pathnames.includes('dashboard')) {
            return `/${pathnames[0]}/lessons/${topic}`
        }
        return topic
    }

    const isLessonData = (item: LessonData | TopicData): item is LessonData => {
        return true
    }

    const handleDeleteClick = (item: LessonData | TopicData) => {
        setDeleteItem(item)
        onOpen()
    }

    const onDeleteItem = async () => {
        try {
            let response
            if (isLessonData(deleteItem as LessonData)) {
                response = await deleteLessonMutation(deleteItem?.id as number)
            } else {
                response = await deleteTopicMutation(deleteItem?.id as number)
            }
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
                                    whiteSpace='nowrap'
                                    overflow='hidden'
                                    textOverflow='ellipsis'
                                >
                                    {lesson.title}
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            <AccordionPanel>
                                <List>
                                    <Flex
                                        fontSize='sm'
                                        justifyContent='space-between'
                                        mb={1}
                                    >
                                        <Text>Topics</Text>
                                        <Text>{lesson.topics.length}</Text>
                                    </Flex>
                                    <Divider mb={4} />
                                    {lesson.topics.length != 0 ? (
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
                                                <Menu placement='bottom-end'>
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
                                        ))
                                    ) : (
                                        <Text
                                            fontSize='sm'
                                            color='gray.500'
                                            textAlign='center'
                                        >
                                            This lesson currently doesn't have
                                            any topics assigned.
                                        </Text>
                                    )}
                                    <Divider marginY={4} />
                                    <Popover>
                                        <PopoverTrigger>
                                            <Button
                                                size='sm'
                                                display='block'
                                                margin='auto'
                                            >
                                                Options
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent
                                            sx={{
                                                backgroundColor: 'gray.600',
                                                color: 'white',
                                                border: '1px solid #2D3748',
                                            }}
                                        >
                                            <PopoverHeader>
                                                Options
                                            </PopoverHeader>
                                            <PopoverCloseButton />
                                            <Button
                                                size='sm'
                                                color='white'
                                                justifyContent='flex-start'
                                                fontWeight={500}
                                                background='transparent'
                                                _hover={{
                                                    color: 'whiteAlpha.800',
                                                }}
                                                leftIcon={<IoTrashBin />}
                                                onClick={() =>
                                                    handleDeleteClick(lesson)
                                                }
                                            >
                                                Delete
                                            </Button>
                                        </PopoverContent>
                                    </Popover>
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
                <AlertDialogContent background='gray.700' margin={4}>
                    <AlertDialogHeader color='white' fontSize='md'>
                        Delete Item
                    </AlertDialogHeader>
                    <AlertDialogBody color='white' fontSize='sm'>
                        Are you sure you want to delete this item?
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

export default LessonsAccordion
