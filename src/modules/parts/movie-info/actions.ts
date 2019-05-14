import {scopedCreator} from '../../../store/utils/createAction'

const createAction = scopedCreator('movies')

export const getMovie = createAction('GET_MOVIE')
export const getMovieStart = createAction('GET_MOVIE_START')
export const getMovieSuccess = createAction('GET_MOVIE_SUCCESS')
export const getMovieFailure = createAction('GET_MOVIE_FAILURE')

