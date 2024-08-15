import { Flex, Heading, Stack, Text } from '@chakra-ui/react'
import { useLocation } from 'react-router-dom'
import React from 'react'
import useLesson from '../hooks/useLesson'
import { LessonData, TopicData } from '../types/data'
import NoContent from '../components/NoContent'
import useTopic from '../hooks/useTopic'

type LessonLocation = {
    hash: string
    key: string
    pathname: string
    state: TopicData
}

const LessonContent = () => {
    const location: LessonLocation = useLocation()
    const [topicData, setTopicData] = React.useState<TopicData | null>(location.state || null)

    const { topics } = useTopic()

    React.useEffect(() => {
        if (!location.state) {
            const getLessonFromDb = async () => {
                const topicTitle = location.pathname.substring(
                    location.pathname.lastIndexOf('/') + 1
                )

                const topicURI = decodeURIComponent(topicTitle)

                const topic = topics?.find((topic) => topic.title === topicURI)

                console.log(topic)

                if (topic) {
                    setTopicData(topic)
                }
            }
            getLessonFromDb()
        }
    }, [topics, topicData, location.state])

    if (!topicData) return <NoContent />

    return (
        <Stack p={4}>
            {topicData && (
                <Stack background='white' p={6} rounded='md'>
                    <Heading color='black' textAlign='center'>
                        {topicData.title}
                    </Heading>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: topicData.content,
                        }}
                    />
                </Stack>
            )}
        </Stack>
    )
}

export default LessonContent
