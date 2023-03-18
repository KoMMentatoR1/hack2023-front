import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { LatLng } from 'leaflet'

export interface HelperState {
  mode: string
}

const initialState: HelperState = {
  mode: 'wrong',
}

export const helperSlice = createSlice({
  name: 'helper',
  initialState,
  reducers: {
    setMode(state, action: PayloadAction<string>) {
      state.mode = action.payload
    }
  },
})
