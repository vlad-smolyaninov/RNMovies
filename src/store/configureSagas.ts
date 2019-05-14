import {all, fork} from 'redux-saga/effects'
import movieInfoSagas from '../modules/parts/movie-info/sagas'

export default function* rootSaga(services: any, context: any) {
  yield all([
    movieInfoSagas,
  ].map((saga: any) => fork(saga, services, context)))
}
