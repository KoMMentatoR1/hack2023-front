import * as AuthActionCreators from './auth'
import * as ThemeActionCreators from './theme'
import * as SnackbarActionCreators from './snackbar'
import * as QuestionActionCreators from './question'
import * as HelperActionCreators from './helper'
import * as AnswerActionCreators from './answer'
import * as QuizActionCreators from './quiz'

export default {
  ...AuthActionCreators,
  ...ThemeActionCreators,
  ...SnackbarActionCreators,
  ...QuestionActionCreators,
  ...HelperActionCreators,
  ...AnswerActionCreators,
  ...QuizActionCreators,
}
