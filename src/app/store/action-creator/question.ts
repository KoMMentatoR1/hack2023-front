import { LatLng } from 'leaflet'
import { AppDispatch } from '..'
import {
  QuestionAnswer,
  questionSlice,
  QuestionState,
} from '../slices/questionSlice'

export const addPoint = (point: LatLng) => (dispatch: AppDispatch) => {
  dispatch(questionSlice.actions.setPoint(point))
}

export const deletePoint = (point: LatLng) => (dispatch: AppDispatch) => {
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
