import { createReducer } from '../../../store/utils/createReducer'
import {scopedCreator} from '../../../store/utils/createAction'

const createAction = scopedCreator('movies')

export const getMovie = createAction('GET_MOVIE')
export const getMovieStart = createAction('GET_MOVIE_START')
export const getMovieSuccess = createAction('GET_MOVIE_SUCCESS')
export const getMovieFailure = createAction('GET_MOVIE_FAILURE')


let initialState = {
  movies: [],
  loading: false,
  error: null,
}

export const reducer = createReducer({
  [getMovieStart]: (state: object) => ({
    ...state,
    loading: true,
    error: null,
  }),
  [getMovieSuccess]: (state: object, payload: Array<object>) => ({
    ...state,
    loading: true,
    error: null,
    movies: payload
  }),
  [getMovieFailure]: (state: object, error: any) => ({
    ...state,
    loading: true,
    error,
  }),
}, initialState)