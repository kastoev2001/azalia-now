import { UserAllSelection, UserSelection } from '../types/user';

export const findIndexInUserAllSelection = (userProduct: UserAllSelection, product: UserSelection) =>
	userProduct.findIndex((products) => {
		if (products.productId === product.productId) {
			return products.productId;
		}
	});

export const updateProduct = (products: UserAllSelection, product: UserSelection): UserAllSelection => {
	const index = findIndexInUserAllSelection(products, product);
	const userProducts = [
		...products.slice(0, index),
		product,
		...products.slice(index + 1)
	];
	return userProducts;
};

export const addProduct = (products: UserAllSelection, product: UserSelection): UserAllSelection => {

	const userProducts = [
		...products,
		product,
	];

	return userProducts;
};

export const removeProduct = (products: UserAllSelection, product: UserSelection): UserAllSelection => {
	const index = findIndexInUserAllSelection(products, product);
	console.log(index)
	const userProducts = [
		...products.slice(0, index),
		...products.slice(index + 1)
	];
	console.log(userProducts)
	return userProducts;
};