import {
  CREATE_POST_LOADING,
  CREATE_POST_SUCCESS,
  CREATE_POST_FAILED,
  CREATE_POST_RESET,
} from "../constants/CreatePostConstants";

const initialState = {
  isLoading: false,
  data: null,
  error: "",
};

export default function CreatePostReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_POST_LOADING: {
      return {
        isLoading: true,
        data: null,
        error: "",
      };
    }

    case CREATE_POST_SUCCESS: {
      return {
        isLoading: false,
        data: action.payload,
        error: "",
      };
    }

    case CREATE_POST_FAILED: {
      return {
        isLoading: false,
        data: null,
        error: action.payload,
      };
    }

    case CREATE_POST_RESET: {
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
