import { getPosts, updatePostScore } from '../Utils/ReadableApi'
import { normalize, schema } from 'normalizr'

export const FETCH_POSTS = 'FETCH_POSTS'
export const UPDATE_POST_SCORE = 'UPDATE_POST_SCORE'

export function fetchPostsAsync() {
  return (dispatch) => {
    getPosts().then((posts) => {

      const post = new schema.Entity('posts');

      const normalizedPosts = normalize(posts, [post]);

      dispatch({
        type: FETCH_POSTS,
        posts: normalizedPosts.entities.posts
      })
    })
  }
}

export function votePostAsync(category, id, isUpvote) {
  return (dispatch) => {
    updatePostScore(id, isUpvote).then(() => {
      dispatch({
        type: UPDATE_POST_SCORE,
        category,
        id,
        isUpvote
      })
    })
  }
}