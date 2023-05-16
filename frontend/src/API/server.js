import { GET, POST } from "./api";

export const GetAllPosts = () => GET(`${process.env.REACT_APP_API_URL}/posts`);

export const GetPost = (id) =>
  GET(`${process.env.REACT_APP_API_URL}/posts/${id}`);

export const CreatePost = (payload) =>
  POST(`${process.env.REACT_APP_API_URL}/posts/add`, payload, {
    headers: {
      Authorization: "Bearer" + localStorage.getItem("token"),
    },
  });

export const LoginIn = (payload) =>
  POST(`${process.env.REACT_APP_API_URL}/users/login`, payload);

export const Register = (payload) =>
  POST(`${process.env.REACT_APP_API_URL}/users/register`, payload);
