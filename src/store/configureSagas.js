import { all, fork } from 'redux-saga/effects'
import movieInfoSagas from '../modules/parts/movie-info/sagas'

export default function * rootSaga (services, context) {
  yield all([
    movieInfoSagas,
  ].map(saga => fork(saga, services, context)))
}
