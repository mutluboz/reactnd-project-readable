import { SHOW, HIDE, LOAD_POST } from '../Actions/PostModalActions'

function PostModal(state = { isVisible: false }, action) {
    switch (action.type) {
        case SHOW: {
            return {
                ...state,
                isVisible: true
            }
        }
        case HIDE: {
            return {
                ...state,
                isVisible: false
            }
        }
        case LOAD_POST: {
            const { post } = action
            return post;
        }
        default:
            return state
    }
}

export default PostModal