import { State } from '../../types/state';
import { NameSpace } from '../../const';
import { ProductsStatus } from '../../types/products-process';
import { Products } from '../../types/products';

export const getIsProductsStatus = (state: State): ProductsStatus => state[NameSpace.Products].productsStatus;
export const getProducts = (state: State): Products => state[NameSpace.Products].products;
