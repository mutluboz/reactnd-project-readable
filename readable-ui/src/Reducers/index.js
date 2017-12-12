import { combineReducers } from 'redux'
import CommentData from './CommentReducer'
import PostData from './PostReducer'
import PostModal from './PostModalReducer'
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
    CommentData,
    PostData,
    PostModal,
    form: formReducer
  })