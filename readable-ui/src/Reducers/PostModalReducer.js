import { SHOW, HIDE, LOAD_POST } from "../Actions/PostModalActions";
import { EntryTypes } from "../constants";

const initialModalState = { isVisible: false, entryType: EntryTypes.post };

function PostModal(state = initialModalState, action) {
  switch (action.type) {
    case SHOW: {
      return {
        ...state,
        isVisible: true,
        entryType: action.entryType
      };
    }
    case HIDE: {
      return initialModalState;
    }
    case LOAD_POST: {
      const { post } = action;
      return post;
    }
    default:
      return state;
  }
}

export default PostModal;
