import React from 'react'
import TopicCard from '../../components/TopicCard'
import useLesson from '../../hooks/useLesson'
import { TopicFields } from '../../types/fields'
import { useToast } from '@chakra-ui/react'
import { useLocation, useNavigate } from 'react-router-dom'
import { LessonData } from '../../types/data'
import useTopic from '../../hooks/useTopic'

const CreateTopic = () => {
    const toast = useToast()
    const location = useLocation()
    const navigate = useNavigate()
    const { lessons, isLessonLoading } = useLesson()
    const { addTopicMutation } = useTopic()
    const topicCardRef = React.useRef(null)

    const onTopicSubmit = async (data: TopicFields) => {
        try {
            const response = await addTopicMutation(data)
            navigate('/admin/lessons')
            toast({
                title: 'Topic Created',
                description: response.data.message,
                status: 'success',
                duration: 9000,
                isClosable: true,
            })
            if (topicCardRef.current) (topicCardRef.current as any).reset()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <TopicCard
            lessons={lessons}
            lessonState={[location.state]}
            onSubmit={onTopicSubmit}
            isLoading={isLessonLoading}
            ref={topicCardRef}
        />
    )
}

export default CreateTopic
