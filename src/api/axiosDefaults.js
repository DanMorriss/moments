import axios from "axios";

axios.defaults.baseURL = 'https://dan-morriss-moments-09a1658577b2.herokuapp.com/';
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
axios.defaults.withCredentials = true;