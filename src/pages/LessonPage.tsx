import {
    Container,
    Heading,
    List,
    ListItem,
    Stack,
    Wrap,
    WrapItem,
} from '@chakra-ui/react'
import { NavLink, useNavigate } from 'react-router-dom'
import useLessons from '../hooks/useLessons'

const LessonPage = () => {
    const navigate = useNavigate()
    const { lessons } = useLessons()
    return (
        <Stack>
            <Heading color='white' mb={4}>
                Lessons
            </Heading>
            <Wrap spacing={4} justify='center'>
                {lessons &&
                    lessons.map((lesson) => (
                        <WrapItem
                            flex={1}
                            key={lesson.id}
                            borderWidth={1}
                            rounded='md'
                            padding={4}
                            borderColor='gray.700'
                        >
                            <Stack>
                                <Heading
                                    as='div'
                                    size='sm'
                                    color='white'
                                    whiteSpace='nowrap'
                                >
                                    {lesson.title}
                                </Heading>
                                <List>
                                    {lesson.topics.map((topic) => (
                                        <ListItem
                                            key={topic.id}
                                            color='gray.400'
                                            fontSize='xs'
                                            textDecoration='underline'
                                            whiteSpace='nowrap'
                                        >
                                            <NavLink
                                                to={topic.title}
                                                state={{
                                                    ...topic,
                                                }}
                                            >
                                                {topic.title}
                                            </NavLink>
                                        </ListItem>
                                    ))}
                                </List>
                            </Stack>
                        </WrapItem>
                    ))}
            </Wrap>
        </Stack>
    )
}

export default LessonPage
