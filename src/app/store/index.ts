import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { authSlice } from './slices/authSlice'
import { themeSlice } from './slices/themSlise'
import { snackbarSlice } from './slices/snackbarSlise'
import { quizSlice } from './slices/quizSlice'
import { questionSlice } from './slices/questionSlice'
import { helperSlice } from './slices/helperSlice'
import { regionApi } from './api/regionApi'

const rootReducer = combineReducers({
  auth: authSlice.reducer,
  theme: themeSlice.reducer,
  snackbar: snackbarSlice.reducer,
  quiz: quizSlice.reducer,
  question: questionSlice.reducer,
  helper: helperSlice.reducer,
  [regionApi.reducerPath]: regionApi.reducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(regionApi.middleware),
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
