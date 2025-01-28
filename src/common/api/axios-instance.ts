import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

import axios from 'axios';

export interface ApiRequestConfig extends AxiosRequestConfig {
  skipAuth?: boolean;
}

export interface ApiResponse<T = any> extends AxiosResponse<T> {}

const BASE_URL = 'https://api.github.com/';

const api: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
});


export default api;
