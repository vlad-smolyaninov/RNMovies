import {combineReducers} from 'redux'
import {createReducer} from './utils/createReducer'
import movieInfoReducer from '../modules/parts/movie-info/reducer'
import {createAction} from './utils/createAction'

export const setStore = createAction('GET_MOVIE')

const globalReducer = createReducer({
  [setStore]: (state: object, payload: any) => (payload),
}, {})

export default combineReducers({
  globalReducer,
  movieInfoReducer,
})


