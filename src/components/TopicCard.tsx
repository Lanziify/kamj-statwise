import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Flex,
    FormControl,
    FormErrorMessage,
    Heading,
    Input,
    Select,
    Skeleton,
    Stack,
    Text,
    Textarea,
} from '@chakra-ui/react'
import JoditEditor from 'jodit-react'
import React from 'react'
import { useForm } from 'react-hook-form'
import { TopicFields } from '../types/fields'
import { LessonData } from '../types/data'

type LessonCardProps = {
    isLoading: boolean
    lessons: LessonData[] | undefined
    onSubmit: (data: TopicFields) => Promise<void>
}

type ChildMethods = {
    reset: () => void
}

const TopicCard = React.forwardRef<ChildMethods, LessonCardProps>(
    (props, ref) => {
        const topicCardRef = React.useRef<HTMLDivElement>(null)
        const topicCardSkeleton = React.useRef<HTMLDivElement>(null)

        const {
            handleSubmit,
            register,
            formState: { errors, isSubmitting },
            control,
            reset,
            setValue,
        } = useForm<TopicFields>({
            defaultValues: {
                lesson_id: '',
                title: '',
                description: '',
                content: '',
            },
        })

        React.useImperativeHandle(ref, () => ({
            reset,
        }))

        React.useEffect(() => {
            if (topicCardRef.current && topicCardSkeleton.current) {
                const cardHeight = topicCardRef.current.clientHeight
                topicCardSkeleton.current.style.height = `${cardHeight}px`
            }
        }, [topicCardRef, topicCardSkeleton])

        return (
            <Stack position='relative'>
                <Skeleton
                    ref={topicCardSkeleton}
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
                    ref={topicCardRef}
                    rounded='md'
                    background='gray.800'
                    visibility={props.isLoading ? 'hidden' : 'visible'}
                >
                    <CardHeader>
                        <Flex
                            justifyContent='space-between'
                            alignItems='center'
                            mb={4}
                        >
                            <Heading size='md' color='white'>
                                Create new topic
                            </Heading>
                            {/* <IconButton
                            size='sm'
                            colorScheme='yellow'
                            aria-label='lesson-add'
                            color='gray.800'
                            icon={<FaPlus />}
                            onClick={props.onOpen}
                        /> */}
                        </Flex>
                        <Text fontSize='sm' color='gray.400'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. At, repellendus!
                        </Text>
                    </CardHeader>
                    <CardBody>
                        <form onSubmit={handleSubmit(props.onSubmit)}>
                            <Stack>
                                <FormControl isInvalid={!!errors.lesson_id}>
                                    <Select
                                        {...register('lesson_id', {
                                            required: 'Lesson is required',
                                        })}
                                        placeholder='Select Lesson'
                                        color='white'
                                        borderColor='gray.600'
                                        _focus={{
                                            borderColor: 'yellow.500',
                                            boxShadow:
                                                '0 0 0 2px rgba(255, 255, 0, 0.5)',
                                        }}
                                        sx={{
                                            option: {
                                                borderColor: 'gray.700',
                                                backgroundColor: 'gray.800',
                                            },
                                        }}
                                    >
                                        {props.lessons &&
                                            props.lessons.map((lesson) => (
                                                <option
                                                    key={lesson.id}
                                                    value={lesson.id}
                                                >
                                                    {lesson.title}
                                                </option>
                                            ))}
                                    </Select>
                                    <FormErrorMessage>
                                        {errors.lesson_id &&
                                            errors.lesson_id.message}
                                    </FormErrorMessage>
                                </FormControl>
                                <FormControl mt={4} isInvalid={!!errors.title}>
                                    <Input
                                        {...register('title', {
                                            required: 'Please add a topic name',
                                        })}
                                        color='white'
                                        borderColor='gray.600'
                                        placeholder='Topic'
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
                                <FormControl>
                                    <JoditEditor
                                        value={control._formValues['content']}
                                        onChange={(newContent) =>
                                            setValue('content', newContent)
                                        }
                                        config={{
                                            height: '25rem',
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
                    </CardBody>
                </Card>
            </Stack>
        )
    }
)

export default TopicCard
