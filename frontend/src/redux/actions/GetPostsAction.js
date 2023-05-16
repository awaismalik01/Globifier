import { GetAllPosts } from "../../API/server";
import {
  GET_POSTS_LOADING,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAILED,
  GET_POSTS_RESET,
} from "../constants/GetPostsConstants";

const Success = (payload) => ({
  type: GET_POSTS_SUCCESS,
  payload,
});

const Failed = (payload) => ({
  type: GET_POSTS_FAILED,
  payload,
});

export const ResetGetPosts = () => ({
  type: GET_POSTS_RESET,
});

export const GetPostsAction = () => (dispatch) => {
  dispatch({ type: GET_POSTS_LOADING });

  GetAllPosts()
    .then((res) => {
      dispatch(Success(res?.data));
    })
    .catch((err) => {
      dispatch(Failed(err?.message || err?.response?.data));
    });
};
