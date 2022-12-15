import axios, { AxiosResponse } from 'axios';

export interface AppResponse<T> {
    data: T;
    status: number;
}

const axiosClient = axios.create({
    baseURL: 'http://...',
    headers: {
        'Content-Type': 'application/json',
    },
});

// Add request interceptors
axiosClient.interceptors.request.use(
    (config) => config,
    (error) => Promise.reject(error)
);

// Add response interceptors
axiosClient.interceptors.response.use(
    (response: AxiosResponse) => response.data,
    (error) => Promise.reject(error)
);

export default axiosClient;
