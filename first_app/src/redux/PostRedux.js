import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  getPosts: ['id'],
  getPostsSuccess: ['posts'],
  selectPost: ['post'],
  editPostValue: ['path', 'value'],
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

export const getPostsSuccess = (state, { posts }) => state.set('posts', posts)

const selectPostR = (state, { post }) => state.set('post', post)

const editPostValueR = (state, { path, value }) =>
  state.setIn(Array.isArray(path) ? path : path.split('.'), value)
/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.EDIT_POST_VALUE]: editPostValueR,
  [Types.GET_POSTS]: (state) => state,
  [Types.GET_POSTS_SUCCESS]: getPostsSuccess,
  [Types.SELECT_POST]: selectPostR,
})
