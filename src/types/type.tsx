export interface loginFields {
    email: string
    password: string
}

export interface IQuiz {
    quizId: number
    quizTitle: string
    quizTypes: QuizType[]
}

export interface QuizType {
    type: number
    description: string
    isGameBased: boolean
    questions: QuestionElement[]
    choices?: string[]
}

export interface QuestionElement {
    question?: string[] | string
    imgSrc?: string
    list?: string[]
    choices?: string[]
    answer: number | string
    problem?: string
    questions?: string[]
}

export interface JWTData {
    iss: string
    iat: number
    exp: number
    nbf: number
    jti: string
    sub: string
    prv: string
    user: User
}

export interface User {
    id: number
    name: string
    email: string
    email_verified_at: null | string
    created_at: string
    updated_at: string
}
