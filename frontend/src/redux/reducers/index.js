import { combineReducers } from "redux";

import RegisterReducer from "./RegisterReducer";
import LoginReducer from "./LoginReducer";
import GetPostsReducer from "./GetPostsReducer";
import GetPostReducer from "./GetPostReducer";
import CreatePostReducer from "./CreatePostReducer";
import CreateCommentReducer from "./CreateCommentReducer";

const rootReducer = combineReducers({
  RegisterReducer,
  LoginReducer,
  GetPostsReducer,
  GetPostReducer,
  CreatePostReducer,
  CreateCommentReducer,
});

export default rootReducer;
