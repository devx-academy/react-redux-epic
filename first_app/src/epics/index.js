import { combineEpics } from 'redux-observable'

import PostsEpic from './PostsEpic'

export default combineEpics(...PostsEpic)
