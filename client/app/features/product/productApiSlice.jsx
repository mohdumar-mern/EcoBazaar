import { apiSlice } from "../api/apiSlice";
import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";

// 🧩 Create entity adapter for normalized products
const productAdapter = createEntityAdapter({
  sortComparer: (a, b) => a.name.localeCompare(b.name),
});

// 🏁 Initial state for normalized + pagination info
const initialState = productAdapter.getInitialState({
  filteredProductsCount: 0,
  resultsPerPage: 0,
  totalPages: 0,
  currentPage: 1,
});

// 🚀 Inject product endpoints
export const productApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (page = 1) => `/products?page=${page}`,

      validateStatus: (response, result) =>
        response.status === 200 && !result.isError,

      keepUnusedDataFor: 5,

      // 🧠 Transform backend response safely
      transformResponse: (responseData) => {
        const {
          products = [],
          filteredProductsCount = 0,
          resultsPerPage = 0,
          totalPages = 0,
          currentPage = 1,
        } = responseData || {};

        const loadedProducts = products.map((product) => ({
          ...product,
          id: product._id, // normalize _id → id
        }));

        // ✅ Create a new plain JS object (not frozen)
        const normalizedState = productAdapter.setAll(
          productAdapter.getInitialState(),
          loadedProducts
        );

        // ✅ Merge pagination info safely
        return {
          ...normalizedState,
          products,
          filteredProductsCount,
          resultsPerPage,
          totalPages,
          currentPage,
        };
      },

      // 🏷️ Auto cache invalidation
      providesTags: (result) =>
        result?.ids
          ? [
              { type: "Product", id: "List" },
              ...result.ids.map((id) => ({ type: "Product", id })),
            ]
          : [{ type: "Product", id: "List" }],
    }),

    // ✅ Single product by ID
    getProduct: builder.query({
      query: (id) => `/product/${id}`,
      transformResponse: (responseData) => {
        const product = responseData?.product || responseData;
        return product ? { ...product, id: product._id } : null;
      },
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

// 🪄 Export hooks
export const { useGetProductsQuery, useGetProductQuery } = productApiSlice;

// 🔍 Select full query result
export const selectProductsResult =
  productApiSlice.endpoints.getProducts.select();

// 🎯 Extract normalized data
const selectProductsData = createSelector(
  selectProductsResult,
  (productsResult) => productsResult.data ?? initialState
);

// 🧭 Adapter selectors
export const {
  selectAll: selectAllProducts,
  selectById: selectProductById,
  selectIds: selectProductIds,
} = productAdapter.getSelectors(
  (state) => selectProductsData(state) ?? initialState
);
