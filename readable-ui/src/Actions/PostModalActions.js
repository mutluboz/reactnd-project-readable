import { EntryTypes } from "../constants";

export const SHOW = "SHOW";
export const HIDE = "HIDE";
export const LOAD_POST = "LOAD_POST";
export const CLEAR_FORM = "CLEAR_FORM";

export const togglePostModal = (show, entryType = EntryTypes.post) => {
  return dispatch => {
    dispatch(show ? { type: SHOW, entryType } : { type: HIDE, entryType });
  };
};

export const loadPost = (post, entryType) => {
  return dispatch => {
    dispatch({
      type: LOAD_POST,
      post: {
        ...post,
        isVisible: true,
        entryType
      }
    });
  };
};
