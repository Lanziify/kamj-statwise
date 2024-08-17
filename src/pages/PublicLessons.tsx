import {
    Heading,
    List,
    ListItem,
    Stack,
    Text,
    Wrap,
    WrapItem,
} from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import useLesson from '../hooks/useLesson'

const PublicLessons = () => {
    const { lessons } = useLesson()

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
                            minWidth='xs'
                            // height='max-content'
                        >
                            <Stack>
                                <Heading as='div' size='sm' color='white'>
                                    {lesson.title}
                                </Heading>
                                <Text color='gray.400' fontSize='sm'>
                                    {lesson.description}
                                </Text>
                                <List
                                    mt={4}
                                    listStyleType='circle'
                                    listStylePos='inside'
                                >
                                    {lesson.topics.map((topic) => (
                                        <ListItem
                                            key={topic.id}
                                            color='gray.400'
                                            fontSize='sm'
                                            textDecoration='underline'
                                        >
                                            <NavLink
                                                to={`${lesson.title}/topic/${topic.title}`}
                                                state={topic}
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

export default PublicLessons
