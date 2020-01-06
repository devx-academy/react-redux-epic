import { combineReducers } from 'redux'

const postRedux = require('../redux/PostRedux')

export const toCombineReducers = {
  postState: postRedux.reducer,
}

export default () => combineReducers(toCombineReducers)
