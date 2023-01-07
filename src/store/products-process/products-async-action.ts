import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute } from '../../const';
import { loadProducts, setDataLoadedStatus } from '../../store/action';
import { Products } from '../../types/products';
import { AppDispatch, State } from '../../types/state';

export const fetchProductsAction = createAsyncThunk<
  Products,
  void,
  {
    dispatch: AppDispatch,
    state: State,
    extra: AxiosInstance,
  }>('data/fetchProducts',
    async (
      _arg,
      { extra: api },
    ) => {
      const { data } = await api.get<Products>(APIRoute.PRODUCTS);

      return data;
    });
