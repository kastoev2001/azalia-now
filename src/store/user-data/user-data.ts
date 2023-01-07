import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { findIndexInUserAllSelection, updateProduct, addProduct, removeProduct } from '../../utils/user';

export type UserSelection = {
  productId: number,
  count?: number,
  isFavorite?: boolean,
};

type UserAllSelection = UserSelection[];

type UserState = {
  userAllSelection: UserAllSelection,
};

const initialState: UserState = {
  userAllSelection: [],
};

export const userData = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {
    addUserProduct: (state, action) => {
      const { userAllSelection } = state;
      const product = action.payload;
      const isProductInUserAllSelection = Boolean(~findIndexInUserAllSelection(userAllSelection, product));

      if (isProductInUserAllSelection) {
        state.userAllSelection = updateProduct(userAllSelection, product);
      } else {
        state.userAllSelection = addProduct(userAllSelection, product);
      }
    },
    removeUserProduct: (state, action) => {
      const { userAllSelection } = state;
      const product = action.payload;
      const isProductInUserAllSelection = Boolean(~findIndexInUserAllSelection(userAllSelection, product));

      if (isProductInUserAllSelection) {
        state.userAllSelection = removeProduct(userAllSelection, product);
      }
    }
  }
});

export const { addUserProduct, removeUserProduct } = userData.actions;