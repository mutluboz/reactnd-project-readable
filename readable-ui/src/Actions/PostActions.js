import { getPosts, updatePostScore } from '../Utils/ReadableApi'

export const FETCH_POSTS = 'FETCH_POSTS'
export const UPDATE_POST_SCORE = 'UPDATE_POST_SCORE'

export function fetchPostsAsync() {
  return (dispatch) => {
    getPosts().then((posts) => {
      dispatch({
        type: FETCH_POSTS,
        posts
      })
    })
  }
}

export function votePostAsync(id, isUpvote) {
  return (dispatch) => {
    updatePostScore(id , isUpvote).then(() => {
      dispatch({
        type: UPDATE_POST_SCORE,
        id,
        isUpvote
      })
    })
  }
}