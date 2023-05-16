import {
  GET_POST_LOADING,
  GET_POST_SUCCESS,
  GET_POST_FAILED,
  GET_POST_RESET,
} from "../constants/GetPostConstants";

const initialState = {
  isLoading: false,
  data: null,
  error: "",
};

export default function GetPostReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POST_LOADING: {
      return {
        isLoading: true,
        data: null,
        error: "",
      };
    }

    case GET_POST_SUCCESS: {
      return {
        isLoading: false,
        data: action.payload,
        error: "",
      };
    }

    case GET_POST_FAILED: {
      return {
        isLoading: false,
        data: null,
        error: action.payload,
      };
    }

    case GET_POST_RESET: {
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
