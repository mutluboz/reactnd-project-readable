import {
  FETCH_POSTS,
  UPDATE_POST_SCORE,
  ADD_POST,
  MODIFY_POST,
  DELETE_POST,
  UPDATE_COMMENT_COUNT
} from "../Actions/PostActions";

function PostData(state = {}, action) {
  switch (action.type) {
    case FETCH_POSTS: {
      return action.posts;
    }
    case UPDATE_POST_SCORE: {
      const { id, isUpvote, currentScore } = action;
      const newScore = currentScore + (isUpvote ? 1 : -1);

      return {
        ...state,
        [id]: {
          ...state[id],
          voteScore: newScore
        }
      };
    }
    case ADD_POST: {
      const { post } = action;
      return {
        ...state,
        [post.id]: post
      };
    }
    case MODIFY_POST: {
      const { post } = action;
      return {
        ...state,
        [post.id]: post
      };
    }
    case DELETE_POST: {
      const { postId } = action;
      return {
        ...state,
        [postId]: undefined
      };
    }
    case UPDATE_COMMENT_COUNT: {
      const newCommentCount = action.isIncreasing
        ? state[action.id].commentCount++
        : state[action.id].commentCount--;

      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          newCommentCount
        }
      };
    }
    default:
      return state;
  }
}

export default PostData;
