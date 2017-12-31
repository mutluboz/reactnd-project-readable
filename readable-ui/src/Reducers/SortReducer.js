import { SORT_ENTRY } from "../Actions/SortActions";

function SortData(state = {}, action) {
  switch (action.type) {
    case SORT_ENTRY: {
      const { masterId, sortBy } = action;
      return {
        ...state,
        [masterId]: sortBy
      };
    }
    default:
      return state;
  }
}

export default SortData;
