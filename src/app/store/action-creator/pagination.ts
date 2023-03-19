import { AppDispatch } from '..'
import { PaginationItem, paginationSlice } from '../slices/paginationSlice'
import { ICreateQuestion } from '../../../shared/types/question'

export const addPaginationItem =
  ({ current, next, prev }: PaginationItem) =>
  (dispatch: AppDispatch) => {
    dispatch(paginationSlice.actions.addPaginationItem({ current, next, prev }))
  }

  export const addQuestion =
    ({
       ballPerQuest,
       correctAnswer,
       description,
       geoPoints,
       previousKey,
       quizId,
       type,
     }: ICreateQuestion) =>
      async (dispatch: AppDispatch) => {

      }
