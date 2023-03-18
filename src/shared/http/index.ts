import axios from 'axios'
import { IUser } from '../types/user'

export const API_URL: string = `http://localhost:3001/api`
export const API_URL2: string = `http://188.225.87.70:4001`

const $api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
})

const $apiw = axios.create({
  baseURL: API_URL,
  withCredentials: true,
})

$api.interceptors.request.use(config => {
  config.headers!.Authorization = `Bearer ${localStorage.getItem('token')}`
  return config
})

$api.interceptors.response.use(
  config => {
    return config
  },
  async error => {
    const originalRequest = error.config
    if (
      error.response.status == 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true
      try {
        const response = await axios.get<IUser>(`${API_URL}/auth/refresh`, {
          withCredentials: true,
        })
        localStorage.setItem('token', response.data.accessToken)
        return $api.request(originalRequest)
      } catch (e) {}
    }
    throw error
  }
)

export default $api
