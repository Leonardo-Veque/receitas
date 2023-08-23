import axios from "axios";

//base URL: https:localhost/4000

const api = axios.create({
    baseURL: 'https://www.themealdb.com/api/json/v1/1/'
});

export default api;