import axios from "axios";
const instance = axios.create({
	baseURL: "https://hackniche404notfound-production.up.railway.app/api/v1",
	withCredentials: "include",
});

export default instance;
