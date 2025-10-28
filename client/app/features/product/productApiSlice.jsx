import { apiSlice } from "../api/apiSlice";
import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";

// 🧩 Create an Entity Adapter
const productAdapter = createEntityAdapter({
  sortComparer: (a, b) => a.name.localeCompare(b.name),
});

// 🏁 Initial state
const initialState = productAdapter.getInitialState();

// 🚀 Inject product endpoints into base API slice
export const productApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/products",

      validateStatus: (response, result) =>
        response.status === 200 && !result.isError,

      keepUnusedDataFor: 5,

      // 🧠 Transform backend response
      transformResponse: (responseData) => {
        // Handle backend structure safely
        const rawProducts = Array.isArray(responseData)
          ? responseData
          : responseData?.products || [];

        const loadedProducts = rawProducts.map((product) => ({
          ...product,
          id: product._id, // normalize _id → id for adapter
        }));

        return productAdapter.setAll(initialState, loadedProducts);
      },

      // 🏷️ Tags for cache invalidation
      providesTags: (result) =>
        result?.ids
          ? [
              { type: "Product", id: "List" },
              ...result.ids.map((id) => ({ type: "Product", id })),
            ]
          : [{ type: "Product", id: "List" }],
    }),

    getProduct: builder.query({
      query: (id) => `/product/${id}`,
      providesTags: (result, error, arg) =>
        result
          ? [
              { type: "Product", id: arg },
              { type: "Product", id: "List" },
            ]
          : [{ type: "Product", id: "List" }],
    }),

  }),
});

export const { 
    useGetProductsQuery,
    useGetProductQuery

 } = productApiSlice;

// 🔍 Select full query result
export const selectProductsResult =
  productApiSlice.endpoints.getProducts.select();

// 🎯 Extract normalized data
const selectProductsData = createSelector(
  selectProductsResult,
  (productsResult) => productsResult.data ?? initialState
);

// 🎛️ Export adapter selectors
export const {
  selectAll: selectAllProducts,
  selectById: selectProductById,
  selectIds: selectProductIds,
} = productAdapter.getSelectors(
  (state) => selectProductsData(state) ?? initialState
);
