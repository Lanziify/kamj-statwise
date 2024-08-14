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
    created_at: string
    updated_at: string
}

export interface QuizData {
    id: number
    title: string
    description: string
    active: number
    time_limit: number
    created_at: string
    updated_at: string
    topic: QuizTopicData
    items: QuizItemData[]
}

interface QuizTopicData {
    id: number
    title: string
}

export interface QuizItemData {
    id:               number;
    question_type_id: number;
    question:         string;
    answer:           number;
    choices:          ChoiceData[];
}

export interface ChoiceData {
    id:    number;
    label: string;
}
