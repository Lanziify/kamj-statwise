import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import useLesson from '../hooks/useLesson'
import {
    Heading,
    List,
    ListItem,
    Stack,
    Text,
    Wrap,
    WrapItem,
} from '@chakra-ui/react'
import NoContent from '../components/NoContent'
import { LessonData } from '../types/data'

type LessonLocation = {
    hash: string
    key: string
    pathname: string
    state: LessonData
}

const LessonItem = () => {
    const location: LessonLocation = useLocation()
    const [lessonData, setLessonData] = React.useState<LessonData | null>(
        location.state || null
    )
    const { lessons } = useLesson()

    React.useEffect(() => {
        if (!location.state) {
            const getLesson = () => {
                const lessonURI = decodeURIComponent(
                    location.pathname.split('/')[2]
                )

                const lesson = lessons?.find(
                    (lesson) => lesson.title === lessonURI
                )

                if (lesson) {
                    setLessonData(lesson)
                }
            }

            getLesson()
        }
    }, [lessons, lessonData, location.state])

    if (!lessonData) return <NoContent />

    return (
        <div>
            <Wrap spacing={4} justify='center'>
                {lessonData && (
                    <WrapItem
                        flex={1}
                        borderWidth={1}
                        rounded='md'
                        padding={4}
                        borderColor='gray.700'
                        minWidth='xs'
                    >
                        <Stack>
                            <Heading as='div' size='sm' color='white'>
                                {lessonData.title}
                            </Heading>{' '}
                            <Text color='gray.400' fontSize='sm'>
                                {lessonData.description}
                            </Text>
                            <List
                                mt={4}
                                listStyleType='circle'
                                listStylePos='inside'
                            >
                                {lessonData.topics.map((topic) => (
                                    <ListItem
                                        key={topic.id}
                                        color='gray.400'
                                        fontSize='sm'
                                        textDecoration='underline'
                                    >
                                        <NavLink
                                            to={`topic/${topic.title}`}
                                            state={topic}
                                        >
                                            {topic.title}
                                        </NavLink>
                                    </ListItem>
                                ))}
                            </List>
                        </Stack>
                    </WrapItem>
                )}
            </Wrap>
        </div>
    )
}

export default LessonItem
