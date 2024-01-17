import axios from "axios";

axios.defaults.baseURL = "https://dan-morriss-drf-api-c0c866a91fa3.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;