import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { API_URL2 } from '../../../shared/http'
import { IRegion } from '../../../shared/types/region'

export const regionApi = createApi({
  reducerPath: 'regionApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_URL2}`,
    prepareHeaders: headers => {
      const token = localStorage.getItem('token')

      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      }

      return headers
    },
  }),
  endpoints: build => ({
    getAllRegions: build.query<IRegion[], void>({
      query: () => ({
        url: `/region/all`,
      }),
    }),
  }),
})
