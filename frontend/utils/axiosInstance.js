import axios from "axios";
const instance = axios.create({
  baseURL: "https://atinlxlnjh.execute-api.ap-south-1.amazonaws.com/dev/api/v1",
  withCredentials: "include",
});

export default instance;
