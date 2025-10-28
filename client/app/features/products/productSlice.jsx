import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    loading: false,
    error: null,
    prodcutCount: 0,
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    removeErrors: (state) => {
      state.error = null;
    }
  },
});

export const { setProducts, removeErrors } = productSlice.actions;
export default productSlice.reducer;
