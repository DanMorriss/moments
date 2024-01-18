import axios from "axios";

// axios.defaults.baseURL = "https://dan-morriss-drf-api-c0c866a91fa3.herokuapp.com/";
axios.defaults.baseURL =
  "https://dan-morriss-drf-api-2-fe887fed1f9d.herokuapp.com/";
// axios.defaults.baseURL = "https://8000-danmorriss-drf-api-436c6w6f81.us2.codeanyapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();
