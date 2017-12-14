import { SHOW, HIDE, LOAD_POST } from '../Actions/PostModalActions'

const initialModalState = { isVisible: false }

function PostModal(state = initialModalState, action) {
    switch (action.type) {
        case SHOW: {
            return {
                ...state,
                isVisible: true
            }
        }
        case HIDE: {
            return initialModalState
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