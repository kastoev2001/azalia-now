import { NameSpace } from '../../const';
import { createSlice } from '@reduxjs/toolkit';
import { ProductsState } from '../../types/products-process';
import { fetchProductsAction } from './products-async-action';

const initialState: ProductsState = {
	products: [],
	productsStatus: {
		isLoaded: false,
		isRejected: false,
	}
};
export const productsProcess = createSlice({
	name: NameSpace.Products,
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchProductsAction.pending, (state) => {
				state.productsStatus.isLoaded = true;
				state.productsStatus.isRejected = false;
			})
			.addCase(fetchProductsAction.fulfilled, (state, action) => {
				const products = action.payload;

				state.products = products;
				state.productsStatus.isLoaded = false;
			})
			.addCase(fetchProductsAction.rejected, (state) => {
				state.products = [];
				state.productsStatus.isLoaded = false;
				state.productsStatus.isRejected = true;
			});
	},
});