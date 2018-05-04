import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from '../reducers/rootReducer'

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware()

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  const store = createStore(
    rootReducer,
    composeEnhancers(
      applyMiddleware(sagaMiddleware)
    )
  )

  return store
}

export default configureStore