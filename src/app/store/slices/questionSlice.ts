import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { LatLng } from 'leaflet'

export interface QuestionState {
  answer: QuestionAnswer
  points: LatLng[]
  previousQuestion: string
  nextQuestion: string
}

interface AnswerText {
  answer: string
}

export type QuestionAnswer = AnswerText | LatLng

const initialState: QuestionState = {
  answer: { answer: '' },
  points: [],
  previousQuestion: '',
  nextQuestion: '',
}

export const questionSlice = createSlice({
  name: 'question',
  initialState,
  reducers: {
    setPoint(state, action: PayloadAction<LatLng>) {
      state.points.length < 9 && state.points.push(action.payload)
    },
    deletePoint(state, action: PayloadAction<LatLng>) {
      state.points.filter(
        point =>
          point.lat !== action.payload.lat && point.lng !== action.payload.lng
      )
    },
    setAnswer(state, action: PayloadAction<QuestionAnswer>) {
      state.answer = action.payload
    },
    setQuestion(state, action: PayloadAction<QuestionState>) {
      state = action.payload
    },
  },
})
