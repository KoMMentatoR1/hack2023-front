import { LatLng } from 'leaflet'
import { AppDispatch } from '..'
import {
  questionSlice,
  QuestionState,
} from '../slices/questionSlice'

export const addPoint = (point: LatLng) => (dispatch: AppDispatch) => {
  dispatch(questionSlice.actions.setPoint(point))
}

export const deletePoint = (point: LatLng) => (dispatch: AppDispatch) => {
  dispatch(questionSlice.actions.deletePoint(point))
}

export const setAnswerText =
  (answer: string) => (dispatch: AppDispatch) => {
    dispatch(questionSlice.actions.setAnswerText(answer))
  }

export const setAnswerLoc =
  (answer: LatLng) => (dispatch: AppDispatch) => {
    dispatch(questionSlice.actions.setAnswerLoc(answer))
  }

export const setType =
  (type: number) => (dispatch: AppDispatch) => {
    dispatch(questionSlice.actions.setType(type))
  }

export const clearData =
  () => (dispatch: AppDispatch) => {
    dispatch(questionSlice.actions.clearData())
  }

export const setQuestion =
  (question: QuestionState) => (dispatch: AppDispatch) => {
    dispatch(questionSlice.actions.setQuestion(question))
  }
