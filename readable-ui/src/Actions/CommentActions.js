import { getComments, updateCommentScore } from '../Utils/ReadableApi'

export const FETCH_COMMENTS = 'FETCH_COMMENTS'
export const UPDATE_COMMENT_SCORE = 'UPDATE_COMMENT_SCORE'

export function fetchCommentsAsync(postID) {
    return (dispatch) => {
        getComments(postID).then((comments) => {
            dispatch({
                type: FETCH_COMMENTS,
                comments
            })
        })
    }
}

export function voteCommentAsync(id, isUpvote, currentScore) {
    return (dispatch) => {
        updateCommentScore(id, isUpvote).then(() => {
            dispatch({
                type: UPDATE_COMMENT_SCORE,
                id,
                isUpvote,
                currentScore
            })
        })
    }
}

