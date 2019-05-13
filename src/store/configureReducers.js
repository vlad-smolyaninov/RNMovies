import { combineReducers } from 'redux'
import { createReducer } from './utils/createReducer'
import { reducer as movieInfoReducer } from '../modules/parts/movie-info/actions'
import { createAction } from './utils/createAction'

export const setStore = createAction('GET_MOVIE')

const globalReducer = createReducer({
  [setStore]: (state, payload) => (payload),
}, {})


export default combineReducers({
  globalReducer,
  movieInfoReducer,
})


