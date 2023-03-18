import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { LatLng } from 'leaflet'

export interface QuestionState {
  type: number
  answerText?: string
  answerLoc: LatLng
  points: LatLng[]
  previousQuestion: string
  nextQuestion: string
}

const initialState: QuestionState = {
  type: 2,
  answerText: '',
  answerLoc: {} as LatLng,
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
    setType(state, action: PayloadAction<number>) {
      if (action.payload >= 1 || action.payload <= 3) {
        state.type = action.payload
      }
    },
    deletePoint(state, action: PayloadAction<LatLng>) {
      state.points = state.points.filter(
        point => {
          return point.lat !== action.payload.lat && point.lng !== action.payload.lng
          console.log("point: ", point)
          console.log("action: ", action.payload)
        }
      )
    },
    setAnswerText(state, action: PayloadAction<string>) {
      state.answerText = action.payload
    },
    setAnswerLoc(state, action: PayloadAction<LatLng>) {
      state.answerLoc = action.payload
    },
    setQuestion(state, action: PayloadAction<QuestionState>) {
      state = action.payload
    },
    clearData(state, action: PayloadAction<void>) {
      state.answerText = ''
      state.answerLoc = {} as LatLng
      state.points = []
    }
  },
})
