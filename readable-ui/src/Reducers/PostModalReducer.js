import { SHOW, HIDE } from '../Actions/PostModalActions'

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
        default:
            return state
    }
}

export default PostModal