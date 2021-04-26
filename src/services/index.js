import { createStore } from 'redux'
import { combineReducers } from 'redux-immutable'

import userReducer from './user/reducer'

// combine reducers
const rootReducer = combineReducers({ userReducer })

// Mount it on the store.
const store = createStore(rootReducer)

export default store
