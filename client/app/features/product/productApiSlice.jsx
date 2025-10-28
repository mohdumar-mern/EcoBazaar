import { apiSlice } from "../api/apiSlice";
import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";

// Create an Entity Adapter for products
const productAdapter = createEntityAdapter({
    sortComparer: (a, b) => a.name.localeCompare(b.name),
}); // Automatically manages normalized state (like ids + entities)


// Get initial state from the adapter
const initialState = productAdapter.getInitialState();

// Inject 'getProducts' endpoint into the base API slice
export const productApiSlice = apiSlice.injectEndpoints({
    endpoints: builder  =>({
        getProducts: builder.query({
            query: () => "/products",
            validateStatus: (response, result) =>
                response.status === 200 && !result.isError,
            keepUnusedDataFor: 5,

            // Transform the response: normalize and rename `_id` → `id` for adapter compatibility
            transformResponse: (responseData) => {
                const loadedProducts = responseData.map((product) => {  
                    product.id = product._id;
                    return product;
                });
                return productAdapter.setAll(initialState, loadedProducts);
            },

            // Tagging system for automatic cache invalidation and updates
            providesTags: (result, err, arg) => {
                if (result?.ids) {
                    return [
                        { type: "Product", id: "List" },
                        ...result.ids.map((id) => ({ type: "Product", id })),
                    ];
                } else {
                    return [{ type: "Product", id: "List" }];
                }
            },
        }),
        // Add new Product

    })
})


export const { useGetProductsQuery } = productApiSlice;

//  Selector to access the full query result (status, isLoading, data, etc.)
export const selectProductsResult = productApiSlice.endpoints.getProducts.select();

// Create a memoized selector to extract just the normalized data from query result
const selectProductsData = createSelector(
    selectProductsResult,
    (productsResult) => productsResult.data // normalized state object with ids & entities
);

export const { 
    selectAll: selectAllProducts,
    selectById: selectProductById,
    selectIds: selectProductIds,
} = productAdapter.getSelectors(
    (state) => selectProductsData(state) ?? initialState
);