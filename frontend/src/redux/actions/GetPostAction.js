import { GetPost } from "../../API/server";
import {
  GET_POST_LOADING,
  GET_POST_SUCCESS,
  GET_POST_FAILED,
  GET_POST_RESET,
} from "../constants/GetPostConstants";

const Success = (payload) => ({
  type: GET_POST_SUCCESS,
  payload,
});

const Failed = (payload) => ({
  type: GET_POST_FAILED,
  payload,
});

export const ResetGetPost = () => ({
  type: GET_POST_RESET,
});

export const GetPostAction = (id) => (dispatch) => {
  dispatch({ type: GET_POST_LOADING });

  GetPost(id)
    .then((res) => {
      dispatch(Success(res?.data));
    })
    .catch((err) => {
      dispatch(Failed(err?.message || err?.response?.data));
    });
};
