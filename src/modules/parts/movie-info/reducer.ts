import {createReducer} from "../../../store/utils/createReducer"
import {getMovieFailure, getMovieStart, getMovieSuccess} from "./actions"

let initialState = {
  movies: [],
  loading: false,
  error: null,
}

export default createReducer({
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