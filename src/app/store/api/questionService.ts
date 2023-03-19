import { AxiosResponse } from 'axios'
import { $api2 } from '../../../shared/http'
import { ICreateQuestion } from '../../../shared/types/question'
import { PaginationItem } from '../slices/paginationSlice'

export class QuestionService {
  static async createNew({
    ballPerQuest,
    correctAnswer,
    description,
    geoPoints,
    previousKey,
    quizId,
    type,
  }: ICreateQuestion): Promise<AxiosResponse<PaginationItem>> {
    return $api2.post<PaginationItem>(`/quest/create`, {
      ballPerQuest,
      correctAnswer,
      description,
      geoPoints,
      previousKey,
      quizId,
      type,
    })
  }
}
