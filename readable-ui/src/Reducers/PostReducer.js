import {
    FETCH_POSTS,
    UPDATE_POST_SCORE,
    ADD_POST,
    MODIFY_POST,
    DELETE_POST
} from '../Actions/PostActions'

function PostData(state = {}, action) {
    switch (action.type) {
        case FETCH_POSTS: {
            return action.posts
        }
        case UPDATE_POST_SCORE: {
            const { id, isUpvote, currentScore } = action
            const newScore = currentScore + (isUpvote ? 1 : -1);

            return {
                ...state,
                [id]: {
                    ...state[id],
                    voteScore: newScore
                }
            }
        }
        case ADD_POST: {
            const { post } = action
            return {
                ...state,
                [post.id]: post
            }

        }
        case MODIFY_POST: {
            return {}
        }
        case DELETE_POST: {
            const { postId } = action
            return {
                ...state,
                [postId]: undefined
            }
        }
        default:
            return state
    }
}

export default PostData 