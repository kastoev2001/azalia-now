import { Products } from './products';

export type ProductsStatus = {
	isLoaded: boolean,
	isRejected: boolean,
};

export type ProductsState = {
	products: Products,
	productsStatus: ProductsStatus,
};