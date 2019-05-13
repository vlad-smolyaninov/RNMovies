import { applyMiddleware, compose, createStore } from 'redux'
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

export default function configureStore (initialState, context = {}) {

  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(...middleware),
    ),
  )

  store.runSagaTask = () => {
    store.sagaTask = sagaMiddleware.run(sagas,  context)
  }

  // run the rootSaga initially
  store.runSagaTask()

  return store
}
