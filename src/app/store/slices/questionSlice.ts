import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface QuestionState {
  answer: QuestionAnswer
  points: IPoint[]
  previousQuestion: string
  nextQuestion: string
}

export interface IPoint {
  lat: Number
  lng: Number
}

interface AnswerText {
  answer: string
}

export type QuestionAnswer = AnswerText | IPoint

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
    setPoint(state, action: PayloadAction<IPoint>) {
      state.points.length <= 9 && state.points.push(action.payload)
    },
    deletePoint(state, action: PayloadAction<IPoint>) {
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
