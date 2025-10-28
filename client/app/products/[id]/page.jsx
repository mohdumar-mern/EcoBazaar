"use client";

import React from "react";
import { useParams } from "next/navigation";
import { useSelector } from "react-redux";
import {
  selectProductById,
  useGetProductQuery,
} from "@/app/features/product/productApiSlice";

const ProductPage = () => {
  // ✅ get dynamic route param
  const params = useParams();
  const id = params?.id;

  // ✅ fetch all products (RTK Query auto-caches)
  const { data, isLoading, isError, error } = useGetProductQuery(id);
    const product = data?.product || data; // handles both `{product: {...}}` or just `{...}` formats


  console.log(product)

  // ✅ select product from normalized cache


  // // ✅ handle states
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error?.message || "Something went wrong"}</p>;

  if (!product) return <p>Product not found</p>;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-green-700 mb-4">
        Product Details
      </h1>
      <div className="bg-white shadow-md rounded-xl p-6 border border-gray-100">
        <p className="text-gray-800 text-lg">
          <strong>Name:</strong> {product?.name}
        </p>
        <p className="text-gray-600 mt-2">
          <strong>Price:</strong> ₹{product.price}
        </p>
        <p className="text-gray-600 mt-2">
          <strong>Category:</strong> {product.category}
        </p>
        <p className="text-gray-600 mt-2">
          <strong>ID:</strong> {product._id}
        </p>
      </div>
    </div>
  );
};

export default ProductPage;
