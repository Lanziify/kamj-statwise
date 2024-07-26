export interface LessonData {
    id: number
    title: string
    description: string
    topics: TopicData[]
    created_at: string
    updated_at: string
}

export interface TopicData {
    id: number
    lesson_id: number
    title: string
    description: string
    content: string
}
