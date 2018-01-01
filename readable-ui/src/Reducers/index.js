import { combineReducers } from "redux";
import CommentData from "./CommentReducer";
import PostData from "./PostReducer";
import EntryModal from "./EntryModalReducer";
import SortData from "./SortReducer";
import { reducer as formReducer } from "redux-form";

export default combineReducers({
  CommentData,
  PostData,
  EntryModal,
  SortData,
  form: formReducer
});
