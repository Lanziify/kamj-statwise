import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Flex,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    IconButton,
    Input,
    Skeleton,
    Stack,
    Text,
    Textarea,
    useDisclosure,
} from '@chakra-ui/react'
import React from 'react'
import { useForm } from 'react-hook-form'
import { FaPlus } from 'react-icons/fa6'
import { LessonFields } from '../types/fields'
import { Modal } from './Modal'
import { LessonData } from '../types/data'
import LessonsAccordion from './LessonsAccordion'
import { MdLibraryBooks } from 'react-icons/md'

type LessonCardProps = {
    isLoading: boolean
    lessons: LessonData[] | undefined
    onSubmit: (data: LessonFields) => Promise<void>
}

type ChildMethods = {
    reset: () => void
    onClose: () => void
}

const LessonCard = React.forwardRef<ChildMethods, LessonCardProps>(
    (props, ref) => {
        const { isOpen, onOpen, onClose } = useDisclosure()
        const lessonCardRef = React.useRef<HTMLDivElement>(null)
        const lessonCardSkeleton = React.useRef<HTMLDivElement>(null)

        const {
            handleSubmit,
            register,
            formState: { errors, isSubmitting },
            reset,
        } = useForm<LessonFields>({
            defaultValues: {
                title: '',
                description: '',
            },
        })

        React.useImperativeHandle(ref, () => ({
            reset,
            onClose,
        }))

        React.useEffect(() => {
            if (lessonCardRef.current && lessonCardSkeleton.current) {
                const cardHeight = lessonCardRef.current.clientHeight
                lessonCardSkeleton.current.style.height = `${cardHeight}px`
            }
        }, [lessonCardRef, lessonCardSkeleton])

        return (
            <Stack position='relative'>
                <Skeleton
                    ref={lessonCardSkeleton}
                    startColor='gray.700'
                    endColor='gray.800'
                    position='absolute'
                    rounded='md'
                    top={0}
                    bottom={0}
                    right={0}
                    left={0}
                    zIndex={1}
                    hidden={!props.isLoading}
                />
                <Card
                    ref={lessonCardRef}
                    color='white'
                    rounded='md'
                    background='gray.900'
                    borderWidth={1}
                    borderColor='gray.700'
                    shadow='none'
                    visibility={props.isLoading ? 'hidden' : 'visible'}
                >
                    <CardHeader>
                        <Flex
                            justifyContent='space-between'
                            alignItems='center'
                            mb={4}
                        >
                            <Flex alignItems='center' gap={2}>
                                <MdLibraryBooks size={24} />
                                <Heading size='md'>My Lessons</Heading>
                            </Flex>
                            <IconButton
                                size='sm'
                                colorScheme='yellow'
                                aria-label='lesson-add'
                                color='gray.800'
                                icon={<FaPlus />}
                                onClick={onOpen}
                            />
                        </Flex>
                        <Text fontSize='sm' color='gray.400'>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Veritatis, tempore fugiat. Ad, quo assumenda?
                            Sint ex autem nisi, dolore omnis totam asperiores,
                            at beatae nesciunt ipsa laboriosam explicabo qui
                            perferendis labore illum animi exercitationem!
                            Blanditiis numquam distinctio sed esse iste
                            laboriosam, eum dignissimos eos ex assumenda
                            veritatis. Nostrum, iure optio.
                        </Text>
                    </CardHeader>
                    <CardBody pt={0}>
                        <LessonsAccordion lessons={props.lessons} />
                    </CardBody>
                </Card>
                <Modal
                    title='Add New Lesson'
                    isOpen={isOpen}
                    onClose={onClose}
                    isCentered
                    closeOnOverlayClick={!isSubmitting}
                >
                    <form onSubmit={handleSubmit(props.onSubmit)}>
                        <Stack spacing={4} color='white'>
                            <FormControl isInvalid={!!errors.title}>
                                <FormLabel fontSize='sm' fontWeight={700}>
                                    Title
                                </FormLabel>
                                <Input
                                    {...register('title', {
                                        required: 'Title is required',
                                    })}
                                    type='text'
                                    placeholder='Title'
                                    _focus={{
                                        borderColor: 'yellow.500',
                                        boxShadow:
                                            '0 0 0 2px rgba(255, 255, 0, 0.5)',
                                    }}
                                    _autofill={{
                                        background: 'transparent',
                                    }}
                                    fontSize='sm'
                                    borderColor='gray.700'
                                />
                                <FormErrorMessage>
                                    {errors.title && errors.title.message}
                                </FormErrorMessage>
                            </FormControl>
                            <FormControl isInvalid={!!errors.description}>
                                <FormLabel fontWeight={700} fontSize='sm'>
                                    Description
                                </FormLabel>
                                <Textarea
                                    {...register('description', {
                                        required: 'Description is required',
                                    })}
                                    placeholder='Description'
                                    _focus={{
                                        borderColor: 'yellow.500',
                                        boxShadow:
                                            '0 0 0 2px rgba(255, 255, 0, 0.5)',
                                    }}
                                    _autofill={{
                                        background: 'transparent',
                                    }}
                                    fontSize='sm'
                                    borderColor='gray.700'
                                />
                                <FormErrorMessage>
                                    {errors.description &&
                                        errors.description.message}
                                </FormErrorMessage>
                            </FormControl>
                            <Flex gap={4} justifyContent='flex-end'>
                                <Button
                                    disabled={isSubmitting}
                                    color='white'
                                    variant=''
                                    alignSelf='start'
                                    onClick={() => {
                                        onClose()
                                        reset()
                                    }}
                                >
                                    Cancel
                                </Button>
                                <Button
                                    type='submit'
                                    disabled={isSubmitting}
                                    colorScheme='yellow'
                                    alignSelf='start'
                                >
                                    Submit
                                </Button>
                            </Flex>
                        </Stack>
                    </form>
                </Modal>
            </Stack>
        )
    }
)

export default LessonCard
