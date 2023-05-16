import { LoginIn } from "../../API/server";
import {
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGIN_RESET,
} from "../constants/LoginConstants";

const Success = (payload) => ({
  type: LOGIN_SUCCESS,
  payload,
});

const Failed = (payload) => ({
  type: LOGIN_FAILED,
  payload,
});

export const ResetLogin = () => ({
  type: LOGIN_RESET,
});

export const RegisterLogin = (payload) => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const LoginAction = (payload) => (dispatch) => {
  dispatch({ type: LOGIN_LOADING });

  LoginIn(payload)
    .then((res) => {
      if (res?.status === 200) {
        localStorage.setItem("token", res?.data?.token?.split("Bearer")[1]);
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
    .catch((err) => {
      dispatch(Failed(err?.message || err?.response?.data));
    });
};
