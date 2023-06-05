import { CreateComment } from "../../API/server";
import {
  CREATE_COMMENT_LOADING,
  CREATE_COMMENT_SUCCESS,
  CREATE_COMMENT_FAILED,
  CREATE_COMMENT_RESET,
} from "../constants/CreateCommentConstants";

const Success = (payload) => ({
  type: CREATE_COMMENT_SUCCESS,
  payload,
});

export const Failed = (payload) => ({
  type: CREATE_COMMENT_FAILED,
  payload,
});

export const ResetCreateComment = () => ({
  type: CREATE_COMMENT_RESET,
});

export const CreateCommentAction = (id, payload) => (dispatch) => {
  dispatch({ type: CREATE_COMMENT_LOADING });

  CreateComment(id, payload)
    .then((res) => {
      if (res?.status === 200) {
        dispatch(Success(res?.data));
      } else {
        dispatch(Failed("Something went wrong"));
      }
    })
    .catch((err) => dispatch(Failed(err?.message || err?.response?.data)));
};
