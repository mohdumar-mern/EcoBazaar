import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080/api/v1", // your backend base URL
  }),
  tagTypes: ["Product", "User", "Cart"], // optional caching tags
  endpoints: () => ({}),
});
