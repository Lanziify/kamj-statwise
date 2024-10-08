import { Flex, Heading, Stack, Text } from '@chakra-ui/react'
import { useLocation } from 'react-router-dom'
import useTopic from '../../hooks/useTopic'
import React from 'react'

const Topic = () => {
    const location = useLocation()
    const [topicData, setTopicData] = React.useState(location.state || null)
    const { topics, isGetTopicLoading, isGetTopicError, getTopic } = useTopic()

    React.useEffect(() => {
        if (!location.state) {
            const getLesson = () => {
                const topicURI = decodeURIComponent(
                    location.pathname.substring(location.pathname.lastIndexOf('/') + 1)
                )

                const topic = topics?.find((topic) => topic.title === topicURI)

                if (topic) {
                    setTopicData(topic)
                }
            }

            getLesson()
        }
    }, [topics, topicData, location.state])

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

export default Topic
