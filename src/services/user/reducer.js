import { fromJS } from 'immutable'
import { handleActions } from 'redux-actions'

import { setToken } from './actions'

// Initial states define which includes token.
const initialState = fromJS({ token: null })

// reducer define which used handleActions of redux-actions.
const reducer = handleActions(
  {
    [setToken] (state, { payload }) {
      /**
       * Save token in local storage for redirect to main page
       * when refresh the app.
       */
      window.localStorage.setItem('token', payload.token)

      return state.set('token', payload.token)
    }
  },
  initialState
)

export default reducer
