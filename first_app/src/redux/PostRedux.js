import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  getPosts: ['id'],
  getPostsSuccess: ['posts'],
})

export const PostTypes = Types
export default Creators

/* ------------- Helpers ------------- */

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  posts: [
    {
      id: 150,
      title: 'Redux',
    },
  ],
  post: null,
})

/* ------------- Reducers ------------- */

const getPostsSuccessR = (state, { posts }) =>
  state.set('posts', posts)

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_POSTS]: (state) => state,
  [Types.GET_POSTS_SUCCESS]: getPostsSuccessR,
})
