import axios from "axios";
const instance = axios.create({
	baseURL: REACT_APP_BACKEND_URL,
	withCredentials: "include",
});

export default instance;
