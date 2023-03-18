import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface PaginationState {
  data: PaginationItem[]
}

export interface PaginationItem {
  prev: string
  current: string
  next: string
}

const initialState: PaginationState = {
  data: [],
}

export const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    addPaginationItem(state, action: PayloadAction<PaginationItem>) {
      state.data
        .map(el =>
          el.current === action.payload.prev
            ? { ...el, next: action.payload.current }
            : el
        )
        .push(action.payload)
    },
  },
})
