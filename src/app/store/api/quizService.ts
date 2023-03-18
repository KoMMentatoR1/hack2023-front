import { AxiosResponse } from 'axios'
import { $api2 } from '../../../shared/http'
import { CreatedQuiz, CreateQuiz } from '../../../shared/types/quiz'

export class QuizService {
  static async createQuiz({
    title,
    regionId,
    description,
  }: CreateQuiz): Promise<AxiosResponse<CreatedQuiz>> {
    return $api2.post<CreatedQuiz>(
      `/quiz/create`,
      {
        title,
        regionId,
        description,
      },
      { withCredentials: true }
    )
  }
}
