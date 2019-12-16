import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  getPosts: null,
})

export const PostTypes = Types
export default Creators

/* ------------- Helpers ------------- */

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  posts: [],
  post: null,
})

/* ------------- Reducers ------------- */

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_POSTS]: (state) => state,
})
