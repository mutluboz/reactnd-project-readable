import { combineReducers } from 'redux'
import CommentData from './CommentReducer'
import PostData from './PostReducer'
import PostModal from './PostModalReducer'

export default combineReducers({
    CommentData,
    PostData,
    PostModal 
  })