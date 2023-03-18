import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface QuizState {
  id: number
  title: string
  description: string
  isFinal: boolean
  regionId: number
  maxBall: number
  isLoading: boolean
}

const initialState: QuizState = {
  id: -1,
  title: '',
  description: '',
  isFinal: false,
  regionId: 0,
  maxBall: 0,
  isLoading: false,
}

export const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    fetchQuiz(state, action: PayloadAction<void>) {
      state.isLoading = true
    },
    setData(state, action: PayloadAction<QuizState>) {
      state.description = action.payload.description
      state.title = action.payload.title
      state.isFinal = action.payload.isFinal
      state.regionId = action.payload.regionId
      state.maxBall = action.payload.maxBall
      state.id = action.payload.id
    },
    clearData(state, action: PayloadAction<void>) {
      state.title = ''
      state.description = ''
      state.isFinal = false
      state.regionId = 0
      state.maxBall = 0
    },
  },
})
