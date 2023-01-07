import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';
import { StatusCodes } from 'http-status-codes';
import { toast } from 'react-toastify';

const BACKEND_URL = 'https://fakestoreapi.com';
const REQUEST_TIMEOUT = 5000;

const StateCodeMapping: Record<number, boolean> = {
	[StatusCodes.BAD_REQUEST]: true,
	[StatusCodes.NOT_FOUND]: true,
}

const shouldDisplayError = (response: AxiosResponse): boolean => Boolean(StateCodeMapping[response.status]);

export const createAPI = (): AxiosInstance => {
	const api = axios.create({
		baseURL: BACKEND_URL,
		timeout: REQUEST_TIMEOUT
	});

	api.interceptors.response.use(
		(response: AxiosResponse): AxiosResponse => response,
		(error: AxiosError) => {
			const errorMessage = error.message;

			if (error.response && shouldDisplayError(error.response)) {
				toast.error(errorMessage);
				return;
			}
			toast.error(errorMessage);

		}
	);

	return api;
};
