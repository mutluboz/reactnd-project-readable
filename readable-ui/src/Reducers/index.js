import { combineReducers } from 'redux'
import CommentData from './CommentReducer'
import PostData from './PostReducer'

export default combineReducers({
    CommentData,
    PostData,
  })