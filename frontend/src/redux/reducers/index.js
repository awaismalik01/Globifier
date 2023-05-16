import { combineReducers } from "redux";

import RegisterReducer from "./RegisterReducer";
import LoginReducer from "./LoginReducer";
import GetPostsReducer from "./GetPostsReducer";
import GetPostReducer from "./GetPostReducer";
import CreatePostReducer from "./CreatePostReducer";

const rootReducer = combineReducers({
  RegisterReducer,
  LoginReducer,
  GetPostsReducer,
  GetPostReducer,
  CreatePostReducer,
});

export default rootReducer;
