import { AppDispatch } from '../index'
import { LatLng } from 'leaflet'
import { answerSlice } from '../slices/answerSlice'

export const setAnswerText =
  (answer: string) => (dispatch: AppDispatch) => {
    dispatch(answerSlice.actions.setAnswerText(answer))
  }

export const setAnswerLoc =
  (answer: LatLng) => (dispatch: AppDispatch) => {
    dispatch(answerSlice.actions.setAnswerLoc(answer))
  }

export const clearAnswerData =
  () => (dispatch: AppDispatch) => {
    dispatch(answerSlice.actions.clearAnswerData())
  }
