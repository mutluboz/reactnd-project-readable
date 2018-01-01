import { SHOW, HIDE, LOAD_ENTRY } from "../Actions/EntryModalActions";
import { EntryTypes } from "../constants";

const initialModalState = { isVisible: false, entryType: EntryTypes.post };

function EntryModal(state = initialModalState, action) {
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
    case LOAD_ENTRY: {
      const { entry } = action;
      return entry;
    }
    default:
      return state;
  }
}

export default EntryModal;
