import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.spacexdata.com/v5'
})

export default api;