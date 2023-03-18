import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { LatLng } from 'leaflet'

export interface QuestionState {
  type: number
  correctAnswerText?: string
  correctAnswerLoc: LatLng
  geoPoints: LatLng[]
  previousQuestion: string
  nextQuestion: string
}

const initialState: QuestionState = {
  type: 2,
  correctAnswerText: '',
  correctAnswerLoc: {} as LatLng,
  geoPoints: [],
  previousQuestion: '',
  nextQuestion: '',
}

export const questionSlice = createSlice({
  name: 'question',
  initialState,
  reducers: {
    setPoint(state, action: PayloadAction<LatLng>) {
      state.geoPoints.length < 9 && state.geoPoints.push(action.payload)
    },
    setType(state, action: PayloadAction<number>) {
      if (action.payload >= 1 || action.payload <= 3) {
        state.type = action.payload
      }
    },
    deletePoint(state, action: PayloadAction<LatLng>) {
      state.geoPoints = state.geoPoints.filter(
        point => {
          return point.lat !== action.payload.lat && point.lng !== action.payload.lng
        }
      )
    },
    setCorrectAnswerText(state, action: PayloadAction<string>) {
      state.correctAnswerText = action.payload
    },
    setCorrectAnswerLoc(state, action: PayloadAction<LatLng>) {
      state.correctAnswerLoc = action.payload
    },
    setQuestion(state, action: PayloadAction<QuestionState>) {
      state = action.payload
    },
    clearData(state, action: PayloadAction<void>) {
      state.correctAnswerText = ''
      state.correctAnswerLoc = {} as LatLng
      state.geoPoints = []
    }
  },
})
