import { EntryTypes } from "../constants";

export const SHOW = "SHOW";
export const HIDE = "HIDE";
export const LOAD_ENTRY = "LOAD_ENTRY";
export const CLEAR_FORM = "CLEAR_FORM";

export const toggleEntryModal = (show, entryType = EntryTypes.post) => {
  return dispatch => {
    dispatch(show ? { type: SHOW, entryType } : { type: HIDE, entryType });
  };
};

export const loadEntry = (entry, entryType) => {
  return dispatch => {
    dispatch({
      type: LOAD_ENTRY,
      entry: {
        ...entry,
        isVisible: true,
        entryType
      }
    });
  };
};
