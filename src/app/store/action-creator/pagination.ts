import { AppDispatch } from '..'
import { PaginationItem, paginationSlice } from '../slices/paginationSlice'

export const addPaginationItem =
  ({ current, next, prev }: PaginationItem) =>
  (dispatch: AppDispatch) => {
    dispatch(paginationSlice.actions.addPaginationItem({ current, next, prev }))
  }
