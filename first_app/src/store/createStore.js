import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
// import logger from 'redux-logger'
import { createEpicMiddleware } from 'redux-observable'
import Immutable from 'seamless-immutable'

import RootEpic from '../epics'

import makeRootReducer from './reducers'

export default (initialState = {}) => {
  const epicMiddleware = createEpicMiddleware()

  const middleware = [thunk, epicMiddleware]
  const enhancers = []

  const store = createStore(
    makeRootReducer(),
    new Immutable(initialState),
    compose(
      applyMiddleware(...middleware),
      ...enhancers,
    ),
  )

  store.asyncReducers = {}

  epicMiddleware.run(RootEpic)

  return store
}