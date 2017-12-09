import { FETCH_POSTS, UPDATE_POST_SCORE } from '../Actions/PostActions'

function PostData(state = {}, action) {
    switch (action.type) {
        case FETCH_POSTS: {
            return action.posts
        }
        case UPDATE_POST_SCORE: {
            const { id, isUpvote, currentScore } = action
            
            const addWith = isUpvote ? 1 : -1;
            const newScore = currentScore + addWith;

           return {
               ...state,
               [id] : {
                   ...state[id],
                   voteScore : newScore
               }
           }
        }
        default:
            return state
    }
}

export default PostData 