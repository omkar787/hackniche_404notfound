import axios from "axios";
const instance = axios.create({
  baseURL: "https://fragile-panama-hat-newt.cyclic.app/api/v1",
  withCredentials: "include",
});

export default instance;
