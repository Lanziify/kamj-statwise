import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { lectures } from '../data/lectures'

const LessonContentPage = () => {
    const location = useLocation()
    const [content, setContent] = useState<null | JSX.Element>(null)

    useEffect(() => {
        const lectureContent = lectures.find(
            (lecture) => lecture.id == location.state.id
        )
        if (lectureContent) {
            setContent(lectureContent?.content)
        }
    }, [location.state])

    return content
}

export default LessonContentPage
