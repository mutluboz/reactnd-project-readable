import { getPosts } from '../Utils/ReadableApi'

export const FETCH_POSTS = 'FETCH_POSTS'

export function fetchPostsAsync() {
  return (dispatch) => {
    getPosts().then((posts) => {
      dispatch(fetchPostsSuccess(posts))
    })
  }
}

export function fetchPostsSuccess(posts) {
  return {
    type: FETCH_POSTS,
    posts
  }
}