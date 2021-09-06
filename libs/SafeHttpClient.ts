import axios from 'axios';
import { getSavedToken } from './helpers';

const httpClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    timeout: 30 * 1000,
    withCredentials: true,
    headers: { accept: 'application/json' },
});

httpClient.interceptors.request.use(
    (req) => {
        const { accessToken } = getSavedToken();
        req.headers.Authorization = 'Bearer ' + accessToken;

        return req;
    },
    (error) => Promise.reject(error)
);

httpClient.interceptors.response.use(
    (response) => response.data,
    (error) => Promise.reject(error)
);

export default httpClient;
