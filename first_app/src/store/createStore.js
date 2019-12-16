import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
// import logger from 'redux-logger'
import { createEpicMiddleware } from 'redux-observable'
import Immutable from 'seamless-immutable'
import { persistStore } from 'redux-persist'

import RootEpic from '../epics'

import makeRootReducer from './reducers'

export default (initialState = {}) => {
  const middleware = [thunk]
  const enhancers = []

  const store = createStore(
    makeRootReducer(),
    new Immutable(initialState),
    compose(
      applyMiddleware(...middleware),
      ...enhancers,
    ),
  )

  store.__persistor = persistStore(store)
  store.asyncReducers = {}

  return store
}