import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { LatLng } from 'leaflet'

export interface AnswerState {
  answerText: string
  answerLoc: LatLng
 // previousQuestion: string
  //nextQuestion: string
}

const initialState: AnswerState = {
  answerText: '',
  answerLoc: {} as LatLng,
  //previousQuestion: '',
  //nextQuestion: '',
}

export const answerSlice = createSlice({
  name: 'answer',
  initialState,
  reducers: {
    setAnswerText(state, action: PayloadAction<string>) {
      state.answerText = action.payload
    },
    setAnswerLoc(state, action: PayloadAction<LatLng>) {
      state.answerLoc = action.payload
    },
    clearData(state, action: PayloadAction<void>) {
      state.answerText = ''
      state.answerLoc = {} as LatLng
    }
  },
})
