import { getPosts, updatePostScore, addOrUpdatePost, deletePost } from '../Utils/ReadableApi'
import { normalize, schema } from 'normalizr'

export const FETCH_POSTS = 'FETCH_POSTS'
export const UPDATE_POST_SCORE = 'UPDATE_POST_SCORE'
export const ADD_POST = 'ADD_POST'
export const MODIFY_POST = 'MODIFY_POST'
export const DELETE_POST = 'DELETE_POST'

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

export function votePostAsync(id, isUpvote, currentScore) {
  return (dispatch) => {
    updatePostScore(id, isUpvote).then(() => {
      dispatch({
        type: UPDATE_POST_SCORE,
        id,
        isUpvote,
        currentScore
      })
    })
  }
}

export function addOrUpdatePostAsync(isUpdating, post) {
  return (dispatch) => {
    addOrUpdatePost(isUpdating, post).then((data) => {
      if (isUpdating)
        dispatch({
          type: MODIFY_POST,
          post
        })
      else
        dispatch({
          type: ADD_POST,
          post: {
            ...post,
            id: data.id,
            commentCount: 0,
            voteScore: 1
          }
        })
    })
  }
}

export function deletePostAsync(id) {
  return (dispatch) => {
    deletePost(id).then(() => {
      dispatch({
        type: DELETE_POST,
        postId: id
      })
    })
  }
}