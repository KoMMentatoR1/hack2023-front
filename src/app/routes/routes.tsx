import { Navigate } from 'react-router-dom'
import RegisterPage from '../../pages/RegisterPage/RegisterPage'
import LoginPage from '../../pages/LoginPage/LoginPage'
import Profile from '../../pages/Profile/Profile'
import ForgotPass from '../../pages/ForgotPass/ForgotPass'
import SwitchPass from '../../pages/SwitchPass/SwitchPass'
import MainPage from '../../pages/MainPage/MainPage'
import QuestionPage from '../../pages/QuestionPage/QuestionPage'
import CreateQuestion from '../../pages/CreateQuestion/CreateQuestion'
import { CreateQuiz } from '../../pages/CreateQuiz/CreateQuiz'
import AdminPage from '../../pages/AdminPage/AdminPage'

interface IRouter {
  path: string
  element: React.ReactNode
}

export const publicRoutes: Array<IRouter> = [
  {
    path: '/register',
    element: <RegisterPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/forgotPass',
    element: <ForgotPass />,
  },
  {
    path: '/forgotPass/:code',
    element: <SwitchPass />,
  },
  {
    path: '/main',
    element: <MainPage />,
  },
  {
    path: '/quiz/:id',
    element: <QuestionPage />,
  },
  {
    path: '/createQuiz',
    element: <CreateQuiz />,
  },
  { path: '*', element: <Navigate to='/main' replace /> },
]

export const userRoutes: Array<IRouter> = [
  {
    path: '/profile',
    element: <Profile />,
  },
  {
    path: '/main',
    element: <MainPage />,
  },
  {
    path: '/quiz/:id',
    element: <QuestionPage />,
  },
  {
    path: '/createQuiz',
    element: <CreateQuiz />,
  },
  {
    path: '/createQuestion',
    element: <CreateQuestion />,
  },
  {
    path: '/question/:uuid',
    element: <CreateQuestion />,
  },
  {
    path: '/admin',
    element: <AdminPage />,
  },
  { path: '*', element: <Navigate to='/main' replace /> },
]
