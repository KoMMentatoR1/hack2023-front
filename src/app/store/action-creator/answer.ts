import { AppDispatch } from '../index'
import { LatLng } from 'leaflet'
import { answerSlice } from '../slices/answerSlice'

export const setCorrectAnswerText =
  (answer: string) => (dispatch: AppDispatch) => {
    dispatch(answerSlice.actions.setAnswerText(answer))
  }

export const setCorrectAnswerLoc =
  (answer: LatLng) => (dispatch: AppDispatch) => {
    dispatch(answerSlice.actions.setAnswerLoc(answer))
  }

export const clearData =
  () => (dispatch: AppDispatch) => {
    dispatch(answerSlice.actions.clearAnswerData())
  }
