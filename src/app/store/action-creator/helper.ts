import { AppDispatch } from '../index'
import { helperSlice } from '../slices/helperSlice'

export const setMode = (mode: string) => (dispatch: AppDispatch) => {
  dispatch(helperSlice.actions.setMode(mode))
}