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
