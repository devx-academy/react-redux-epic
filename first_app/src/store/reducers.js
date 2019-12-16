import { combineReducers } from 'redux'

const postRedux = require('../redux/PostRedux')

export const toCombineReducers = {
  posts: postRedux.reducer,
}

export default () => combineReducers(toCombineReducers)
