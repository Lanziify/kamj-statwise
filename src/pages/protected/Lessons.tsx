import React from 'react'
import useLessons from '../../hooks/useLessons'
import LessonCard from '../../components/LessonCard'
import { LessonFields } from '../../types/fields'

const Lessons = () => {
    const { addLessonMutation, lessons, isLessonLoading } = useLessons()
    const lessonCardRef = React.useRef(null)

    const onLessonSubmit = async (data: LessonFields) => {
        try {
            await addLessonMutation(data)
            if (lessonCardRef.current) {
                ;(lessonCardRef.current as any).reset()
                ;(lessonCardRef.current as any).onClose()
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <LessonCard
                lessons={lessons}
                onSubmit={onLessonSubmit}
                isLoading={isLessonLoading}
                ref={lessonCardRef}
            />
        </div>
    )
}

export default Lessons
