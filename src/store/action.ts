import { createAction } from '@reduxjs/toolkit';
import { Products } from '../types/products';
import { UserSelection } from '../types/user';

export const loadProducts = createAction<Products>('data/loadProducts');
export const setDataLoadedStatus = createAction<boolean>('page/setDataLoadedStatus');
export const addUserProduct = createAction<UserSelection>('user/addUserProduct');
export const removeUserProduct = createAction<UserSelection>('user/removeUserProduct');
