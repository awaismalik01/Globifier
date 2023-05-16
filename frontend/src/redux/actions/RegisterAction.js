import { Register } from "../../API/server";
import {
  REGISTER_LOADING,
  REGISTER_SUCCESS,
  REGISTER_FAILED,
  REGISTER_RESET,
} from "../constants/RegisterConstants";

const Success = (payload) => ({
  type: REGISTER_SUCCESS,
  payload,
});

const Failed = (payload) => ({
  type: REGISTER_FAILED,
  payload,
});

export const ResetRegister = () => ({
  type: REGISTER_RESET,
});

export const RegisterAction = (payload) => (dispatch) => {
  dispatch({ type: REGISTER_LOADING });

  Register(payload)
    .then((res) => {
      if (res?.status === 201) {
        dispatch(
          Success({
            name: res?.data?.firstname + " " + res?.data?.lastname,
            email: res?.data?.email,
            role: res?.data?.role,
          })
        );
      } else {
        dispatch(Failed("Something went wrong"));
      }
    })
    .catch((err) => dispatch(Failed(err?.message || err?.response?.data)));
};
