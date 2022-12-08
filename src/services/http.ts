import axios, { AxiosInstance } from 'axios';
import { WEB_API_URL } from './constants';

const http: AxiosInstance = axios.create({
	baseURL: WEB_API_URL,
	headers: {
		'Access-Control-Allow-Origin': '*',
		'Content-Type': 'application/json',
		Accept: 'application/json',
	},
});

export { http };