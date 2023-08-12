import axios from "axios";

//base URL: https:localhost/3000

const api = axios.create({
    baseURL: 'https:localhost/3000'
});

export default api;