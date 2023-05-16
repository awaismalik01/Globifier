import axios from "axios";

export const GET = (url) => axios.get(url);

export const POST = (url, payload, headers = {}) => {
  return axios.post(url, payload, headers);
};

export const PATCH = (url, payload) => axios.patch(url, payload);
