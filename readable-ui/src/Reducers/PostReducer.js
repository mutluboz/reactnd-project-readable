import { FETCH_POSTS } from '../Actions/PostActions'
import { GroupBy } from '../Utils/Helpers'

function PostData(state = {}, action) {
    switch (action.type) {
        case FETCH_POSTS: {
            const { posts } = action
            
            return GroupBy(posts, 'category')
        }
        default:
            return state
    }
}

export default PostData 