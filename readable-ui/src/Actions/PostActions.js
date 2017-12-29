import {
  getPosts,
  updatePostScore,
  addOrUpdatePost,
  deletePost,
  getPostByID,
  getPostsByCategory
} from "../Utils/ReadableApi";
import { normalize, schema } from "normalizr";
import { reset } from "redux-form";
import { togglePostModal } from "../Actions/PostModalActions";

export const FETCH_POSTS = "FETCH_POSTS";
export const UPDATE_POST_SCORE = "UPDATE_POST_SCORE";
export const ADD_POST = "ADD_POST";
export const MODIFY_POST = "MODIFY_POST";
export const DELETE_POST = "DELETE_POST";
export const UPDATE_COMMENT_COUNT = "UPDATE_COMMENT_COUNT";

export function fetchPostsAsync() {
  return dispatch => {
    getPosts().then(posts => {
      const post = new schema.Entity("posts");

      const normalizedPosts = normalize(posts, [post]);

      dispatch({
        type: FETCH_POSTS,
        posts: normalizedPosts.entities.posts
      });
    });
  };
}

export function getPostByIdAsync(id) {
  return dispatch => {
    getPostByID(id).then(posts => {
      const post = new schema.Entity("posts");

      const normalizedPosts = normalize(posts, post);

      dispatch({
        type: FETCH_POSTS,
        posts: normalizedPosts.entities.posts
      });
    });
  };
}

export function fetchPostsByCategoryAsync(category) {
  return dispatch => {
    getPostsByCategory(category).then(posts => {
      if (posts.length > 0) {
        const post = new schema.Entity("posts");

        const normalizedPosts = normalize(posts, [post]);

        dispatch({
          type: FETCH_POSTS,
          posts: normalizedPosts.entities.posts
        });
      } else
        dispatch({
          type: FETCH_POSTS,
          posts: []
        });
    });
  };
}

export function votePostAsync(id, isUpvote, currentScore) {
  return dispatch => {
    updatePostScore(id, isUpvote).then(() => {
      dispatch({
        type: UPDATE_POST_SCORE,
        id,
        isUpvote,
        currentScore
      });
    });
  };
}

export function addOrUpdatePostAsync(isUpdating, post) {
  return dispatch => {
    addOrUpdatePost(isUpdating, post)
      .then(data => {
        if (isUpdating)
          dispatch({
            type: MODIFY_POST,
            post
          });
        else
          dispatch({
            type: ADD_POST,
            post: {
              ...post,
              id: data.id,
              commentCount: 0,
              voteScore: 1
            }
          });
      })
      .then(() => {
        dispatch(reset("postForm"));
        dispatch(togglePostModal(false));
      });
  };
}

export function deletePostAsync(id) {
  return dispatch => {
    deletePost(id).then(() => {
      dispatch({
        type: DELETE_POST,
        postId: id
      });
    });
  };
}

export function updateCommentCount(id, isIncreasing) {
  return {
    type: UPDATE_COMMENT_COUNT,
    id,
    isIncreasing
  };
}
