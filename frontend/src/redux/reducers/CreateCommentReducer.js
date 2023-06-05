import {
  CREATE_COMMENT_LOADING,
  CREATE_COMMENT_SUCCESS,
  CREATE_COMMENT_FAILED,
  CREATE_COMMENT_RESET,
} from "../constants/CreateCommentConstants";

const initialState = {
  isLoading: false,
  data: null,
  error: "",
};

export default function CreateCommentReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_COMMENT_LOADING: {
      return {
        isLoading: true,
        data: null,
        error: "",
      };
    }

    case CREATE_COMMENT_SUCCESS: {
      return {
        isLoading: false,
        data: action.payload,
        error: "",
      };
    }

    case CREATE_COMMENT_FAILED: {
      return {
        isLoading: false,
        data: null,
        error: action.payload,
      };
    }

    case CREATE_COMMENT_RESET: {
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
