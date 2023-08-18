import axios from "axios";

//base URL: https:localhost/4000

const api = axios.create({
    baseURL: 'http://localhost:4000'
});

export default api;