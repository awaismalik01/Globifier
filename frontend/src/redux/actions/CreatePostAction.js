import { CreatePost } from "../../API/server";
import {
  CREATE_POST_LOADING,
  CREATE_POST_SUCCESS,
  CREATE_POST_FAILED,
  CREATE_POST_RESET,
} from "../constants/CreatePostConstants";

const Success = (payload) => ({
  type: CREATE_POST_SUCCESS,
  payload,
});

export const Failed = (payload) => ({
  type: CREATE_POST_FAILED,
  payload,
});

export const ResetCreatePost = () => ({
  type: CREATE_POST_RESET,
});

export const CreatePostAction = (payload) => (dispatch) => {
  dispatch({ type: CREATE_POST_LOADING });

  CreatePost(payload)
    .then((res) => {
      if (res?.status === 201) {
        dispatch(Success(res?.data));
      } else {
        dispatch(Failed("Something went wrong"));
      }
    })
    .catch((err) => dispatch(Failed(err?.message || err?.response?.data)));
};
