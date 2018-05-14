import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers/root-reducer'
import retrieveRepresentativesSaga from './sagas/retrieve-representatives-saga'

const initialize = () => {
  const sagaMiddleware = createSagaMiddleware()

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  const store = createStore(
    rootReducer,
    composeEnhancers(
      applyMiddleware(sagaMiddleware)
    )
  )

  sagaMiddleware.run(retrieveRepresentativesSaga)

  window.Store = store

  return store
}

export default { initialize }
