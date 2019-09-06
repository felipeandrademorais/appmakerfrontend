import axios from 'axios';

const api = axios.create({
    baseURL: 'https://appmakerbackend.herokuapp.com'
});

export default api;