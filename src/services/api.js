import axios from "axios";

//base URL: https:localhost/4000

const api = axios.create({
    baseURL: 'https:localhost/4000'
});

export default api;