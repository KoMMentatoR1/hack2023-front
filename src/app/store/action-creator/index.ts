import * as AuthActionCreators from './auth'
import * as ThemeActionCreators from './theme'
import * as SnackbarActionCreators from './snackbar'
import * as QuestionActionCreators from './question'
import * as HelperActionCreators from './helper'

export default {
  ...AuthActionCreators,
  ...ThemeActionCreators,
  ...SnackbarActionCreators,
  ...QuestionActionCreators,
  ...HelperActionCreators
}
