import { Provider } from 'react-redux';
import { store } from '../store/index';
import { ToastContainer } from 'react-toastify';

import type { AppProps } from 'next/app';
import { fetchProductsAction } from '../store/products-process/products-async-action';

import '../styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';

store.dispatch(fetchProductsAction());

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<ToastContainer />
			<Component {...pageProps} />
		</Provider>
	);
}
