import { AppDispatch } from '..'
import {
  IPoint,
  QuestionAnswer,
  questionSlice,
  QuestionState,
} from '../slices/questionSlice'

export const addPoint = (point: IPoint) => (dispatch: AppDispatch) => {
  dispatch(questionSlice.actions.setPoint(point))
}

export const deletePoint = (point: IPoint) => (dispatch: AppDispatch) => {
  dispatch(questionSlice.actions.deletePoint(point))
}

export const setAnswer =
  (answer: QuestionAnswer) => (dispatch: AppDispatch) => {
    dispatch(questionSlice.actions.setAnswer(answer))
  }

export const setQuestion =
  (question: QuestionState) => (dispatch: AppDispatch) => {
    dispatch(questionSlice.actions.setQuestion(question))
  }
