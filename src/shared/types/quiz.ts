export interface CreateQuiz {
  title: string
  regionId: number
  description: string
}

export interface CreatedQuiz {
  id: number
  finished: boolean
  title: string
  regionId: number
  description: string
  user: string,
  stars: number,
  plays: number,
  link: string
}