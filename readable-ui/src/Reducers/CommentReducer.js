import {
  FETCH_COMMENTS,
  UPDATE_COMMENT_SCORE,
  DELETE_COMMENT
} from "../Actions/CommentActions";

//this code is not optimal. unlike post data,
//i didn't normalize comment data to reduce complexity of code
function CommentData(state = [], action) {
  switch (action.type) {
    case FETCH_COMMENTS: {
      return action.comments;
    }
    case UPDATE_COMMENT_SCORE: {
      const { id, isUpvote, currentScore } = action;
      const newScore = currentScore + (isUpvote ? 1 : -1);

      const updatedComments = state.map(comment => {
        if (comment.id === id) {
          return { ...comment, voteScore: newScore };
        }
        return comment;
      });
      return updatedComments;
    }
    case DELETE_COMMENT: {
      const { id } = action;

      return state.filter(c => c.id !== id);
    }
    default:
      return state;
  }
}

export default CommentData;
