import axios from 'axios';

const instance = axios.create({
    baseURL: import.meta.env.API_BASE_URL,
    withCredentials: false,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
    },
});

export default instance;
