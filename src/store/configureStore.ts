import {applyMiddleware, compose, createStore} from 'redux'
import rootReducer from './configureReducers'
import sagas from './configureSagas'
import createSagaMiddleware from 'redux-saga'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

// Add middlewares here
let middleware = [sagaMiddleware]

if (process.env.NODE_ENV !== 'production') {
  middleware = [...middleware]
}

export default function configureStore(initialState: any = {}, context: any = {}) {

  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(...middleware),
    ),
  )

  const services = {}

  // run the rootSaga initially
  sagaMiddleware.run(sagas, services, context)

  return store
}
