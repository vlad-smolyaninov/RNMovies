import {call, put, putResolve, takeLatest} from 'redux-saga/effects'
import {getMovie, getMovieFailure, getMovieStart, getMovieSuccess} from './actions'
import Api from '../../../services/api/Api'

function* fetchMovie({payload: {search}} : { payload: {search: string}}) {
  try {
    yield putResolve(getMovieStart())
    const result = yield call([Api, Api.get], {url: 'fetchMovieByName', search})


    yield put(getMovieSuccess(result))
  } catch (err) {
    yield put(getMovieFailure(err))
  }
}

export default function* () {
  yield takeLatest(getMovie, fetchMovie)
}