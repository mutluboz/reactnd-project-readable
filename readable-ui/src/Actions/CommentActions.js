import { reset } from "redux-form";
import { togglePostModal } from "../Actions/PostModalActions";
import { updateCommentCount } from "../Actions/PostActions";
import {
  getComments,
  updateCommentScore,
  deleteComment,
  addOrUpdateComment
} from "../Utils/ReadableApi";

export const FETCH_COMMENTS = "FETCH_COMMENTS";
export const UPDATE_COMMENT_SCORE = "UPDATE_COMMENT_SCORE";
export const DELETE_COMMENT = "DELETE_COMMENT";
export const MODIFY_COMMENT = "MODIFY_COMMENT";
export const ADD_COMMENT = "ADD_COMMENT";

export function fetchCommentsAsync(id) {
  return dispatch => {
    getComments(id).then(comments => {
      dispatch({
        type: FETCH_COMMENTS,
        comments
      });
    });
  };
}

export function voteCommentAsync(id, isUpvote, currentScore) {
  return dispatch => {
    updateCommentScore(id, isUpvote).then(() => {
      dispatch({
        type: UPDATE_COMMENT_SCORE,
        id,
        isUpvote,
        currentScore
      });
    });
  };
}

export function deleteCommentAsync(comment) {
  return dispatch => {
    deleteComment(comment.id).then(() => {
      dispatch({
        type: DELETE_COMMENT,
        id: comment.id
      });
      dispatch(updateCommentCount(comment.parentId, false));
    });
  };
}

export function addOrUpdateCommentAsync(isUpdating, comment) {
  return dispatch => {
    addOrUpdateComment(isUpdating, comment)
      .then(data => {
        if (isUpdating)
          dispatch({
            type: MODIFY_COMMENT,
            comment
          });
        else {
          dispatch({
            type: ADD_COMMENT,
            comment: {
              ...comment,
              id: data.id,
              voteScore: 1
            }
          });
          dispatch(updateCommentCount(comment.parentId, true));
        }
      })
      .then(() => {
        dispatch(reset("postForm"));
        dispatch(togglePostModal(false));
      });
  };
}
