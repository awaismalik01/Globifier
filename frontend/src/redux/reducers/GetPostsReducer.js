import {
  GET_POSTS_LOADING,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAILED,
  GET_POSTS_RESET,
} from "../constants/GetPostsConstants";

const initialState = {
  isLoading: false,
  data: null,
  error: "",
};

export default function GetPostsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS_LOADING: {
      return {
        isLoading: true,
        data: null,
        error: "",
      };
    }

    case GET_POSTS_SUCCESS: {
      return {
        isLoading: false,
        data: action.payload,
        error: "",
      };
    }

    case GET_POSTS_FAILED: {
      return {
        isLoading: false,
        data: null,
        error: action.payload,
      };
    }

    case GET_POSTS_RESET: {
      return {
        isLoading: false,
        data: null,
        error: "",
      };
    }

    default:
      return state;
  }
}
