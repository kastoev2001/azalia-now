import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { productsProcess } from './products-process/products-process';
import { userData } from './user-data/user-data';

export const rootReducer = combineReducers({
	[NameSpace.Products]: productsProcess.reducer,
	[NameSpace.User]: userData.reducer,
});
