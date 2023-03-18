import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface QuizState {
  title: string
  discription: string
  isFinal: boolean
  region: number
  maxBall: number
}

const initialState: QuizState = {
  title: '',
  discription: '',
  isFinal: false,
  region: 0,
  maxBall: 0,
}

export const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    setData(state, action: PayloadAction<QuizState>) {
      state = action.payload
    },
    clearData(state, action: PayloadAction<void>) {
      state.title = ''
      state.discription = ''
      state.isFinal = false
      state.region = 0
      state.maxBall = 0
    },
  },
})
