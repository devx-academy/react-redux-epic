import { ofType } from 'redux-observable'
import {catchError, mergeMap, switchMap} from 'rxjs/operators'
import { from, EMPTY, of } from 'rxjs'

import PostActions, { PostTypes } from '../redux/PostRedux'
import Api from '../services/Api'

export default [
  (action$) =>
    action$.pipe(
      ofType(PostTypes.GET_POSTS),
      switchMap((action) =>
        from(Api.getOnePost(action.id)).pipe(
          switchMap((response) => {
            console.log(response)
            return of(PostActions.getPostsSuccess([response.data]))
          }),
          catchError((e) => {
            console.log(e)
            return EMPTY
          })
        ),
      ),
    ),
]
