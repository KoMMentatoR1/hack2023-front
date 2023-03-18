import { AppDispatch } from '..'
import { CreateQuiz } from '../../../shared/types/quiz'
import { QuizService } from '../api/quizService'
import { quizSlice } from '../slices/quizSlice'
import { snackbarSlice } from '../slices/snackbarSlise'

export const createQuiz =
  ({ description, regionId, title }: CreateQuiz) =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(quizSlice.actions.fetchQuiz())
      const response = await QuizService.createQuiz({
        description,
        regionId,
        title,
      })
      dispatch(
        quizSlice.actions.setData({
          description: response.data.description,
          isFinal: response.data.finished,
          isLoading: false,
          maxBall: 0,
          regionId: response.data.regionId,
          title: response.data.title,
          id: response.data.id,
        })
      )
      dispatch(
        snackbarSlice.actions.enqueueSnackbar({
          id: new Date().getTime(),
          message: 'Викторина успешно создана',
          variant: 'success',
        })
      )
    } catch (e: any) {
      snackbarSlice.actions.enqueueSnackbar({
        id: new Date().getTime(),
        message: e.response.data.message,
        variant: 'error',
      })
    }
  }
