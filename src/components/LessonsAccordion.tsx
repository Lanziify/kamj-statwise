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
    List,
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
import { IoAdd, IoTrashBin } from 'react-icons/io5'
import useLesson from '../hooks/useLesson'
import AccordionTopicListItem from './AccordionTopicListItem'
import { useNavigate } from 'react-router-dom'

type LessonAccordionType = {
    lessons: LessonData[] | undefined
}

type MenuOption = {
    menu: string
    icon: JSX.Element
    onClick: (data: LessonData) => void
}

const LessonsAccordion: React.FC<LessonAccordionType> = (props) => {
    const { deleteLessonMutation } = useLesson()
    const toast = useToast()
    const navigate = useNavigate()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef(null)
    const [deleteItem, setDeleteItem] = React.useState<
        LessonData | TopicData | null
    >(null)

    const lessonMenuOptions: MenuOption[] = [
        {
            menu: 'New Topic',
            icon: <IoAdd />,
            onClick: (lesson) => {
                navigate('/admin/lessons/new/topic', { state: lesson })
            },
        },
        {
            menu: 'Remove Lesson',
            icon: <IoTrashBin />,
            onClick: (lesson) => handleDeleteClick(lesson),
        },
    ]

    const handleDeleteClick = (item: LessonData) => {
        setDeleteItem(item)
        onOpen()
    }

    const onDeleteItem = async () => {
        try {
            const response = await deleteLessonMutation(
                deleteItem?.id as number
            )

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
                                        <AccordionTopicListItem
                                            lesson={lesson}
                                        />
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
                                    <Menu placement='bottom'>
                                        <MenuButton
                                            as={Button}
                                            size='sm'
                                            display='block'
                                            margin='auto'
                                            aria-label='option'
                                        >
                                            Options
                                        </MenuButton>
                                        <MenuList
                                            sx={{
                                                backgroundColor: 'gray.600',
                                                color: 'white',
                                                border: '1px solid #2D3748',
                                            }}
                                        >
                                            <MenuGroup title='Options'>
                                                {lessonMenuOptions.map(
                                                    (option) => (
                                                        <MenuItem
                                                            key={option.menu}
                                                            fontSize='sm'
                                                            background='transparent'
                                                            _hover={{
                                                                color: 'whiteAlpha.800',
                                                                backgroundColor:
                                                                    'gray.500',
                                                            }}
                                                            icon={option.icon}
                                                            onClick={() =>
                                                                option.onClick(
                                                                    lesson
                                                                )
                                                            }
                                                        >
                                                            {option.menu}
                                                        </MenuItem>
                                                    )
                                                )}
                                                {/*  */}
                                            </MenuGroup>
                                        </MenuList>
                                    </Menu>
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
                        Delete Lesson
                    </AlertDialogHeader>
                    <AlertDialogBody color='white' fontSize='sm'>
                        Are you sure you want to delete this lesson?
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
