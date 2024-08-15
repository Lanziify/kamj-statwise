export type LessonFields = {
    title: string
    description: string
}

export type TopicFields = {
    lesson_id: number | string
    title: string
    description: string
    content: string
}

export type QuizFields = {
    topic_id: number | string
    title: string
    description: string
}

export type QuizItemFields = {
    questionType: number | string
    question: string
    choices: []
    answer: number | string
}
