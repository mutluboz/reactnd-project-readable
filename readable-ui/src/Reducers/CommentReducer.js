import {
    FETCH_COMMENTS,
    UPDATE_COMMENT_SCORE
} from '../Actions/CommentActions'

function CommentData(state = [], action) {
    switch (action.type) {
        case FETCH_COMMENTS: {
            return action.comments;
        }
        case UPDATE_COMMENT_SCORE: {
            const { id, isUpvote, currentScore } = action
            const newScore = currentScore + (isUpvote ? 1 : -1);
            

            console.log(state)
            return {
                ...state,
                [id]: {
                    ...state[id],
                    voteScore: newScore
                }
            }
        }
        default:
            return state;
    }
}

export default CommentData