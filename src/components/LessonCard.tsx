import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Card,
    CardBody,
    CardHeader,
    Flex,
    Heading,
    IconButton,
    Skeleton,
    Stack,
    Text,
} from '@chakra-ui/react'
import React from 'react'
import { FaPlus } from 'react-icons/fa6'

type LessonCardProps = {
    isLoading: boolean
    onOpen: () => void
    lessons: []
}

const LessonCard: React.FC<LessonCardProps> = (props) => {
    const lessonCardRef = React.useRef<HTMLDivElement>(null)
    const lessonCardSkeleton = React.useRef<HTMLDivElement>(null)

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
                startColor='gray.800'
                endColor='gray.900'
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
                background='gray.800'
                visibility={props.isLoading ? 'hidden' : 'visible'}
            >
                <CardHeader>
                    <Flex
                        justifyContent='space-between'
                        alignItems='center'
                        mb={4}
                    >
                        <Heading size='md'>My Lessons</Heading>
                        <IconButton
                            size='sm'
                            colorScheme='yellow'
                            aria-label='lesson-add'
                            color='gray.800'
                            icon={<FaPlus />}
                            onClick={props.onOpen}
                        />
                    </Flex>
                    <Text fontSize='sm' color='gray.400'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. At, repellendus!
                    </Text>
                </CardHeader>
                <CardBody>
                    <Stack>
                        {props.lessons &&
                            props.lessons.map((lesson: any) => (
                                <Accordion key={lesson.id} allowToggle>
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
                                            >
                                                {lesson.title}
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel
                                        // as={Button}
                                        ></AccordionPanel>
                                    </AccordionItem>
                                </Accordion>
                            ))}
                    </Stack>
                </CardBody>
            </Card>
        </Stack>
    )
}

export default LessonCard
