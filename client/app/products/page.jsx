"use client";

import { ProductCard } from '@/components/ProductCard';
import React from 'react'
import { selectAllProducts, useGetProductsQuery } from '../features/product/productApiSlice';
import { useSelector } from 'react-redux';

// export const metadata = {
//   title: "Products | Eco Bazaar",
//   description: "Browse the latest trending eco-friendly products.",
// };

const Products = () => {
  const { isLoading, isError, error } = useGetProductsQuery();
  const products = useSelector(selectAllProducts);
  console.log(products)

  if (isLoading) return <p>Loading...</p>
  if (isError) return <p>Error: {error.message}</p>

  return (
    <section className="py-10 bg-gray-50">
        {/* Section Header */}
        <div className="max-w-7xl mx-auto px-4 text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            🌿 Trending Now
          </h1>
          <p className="text-gray-500 text-sm md:text-base">
            Discover our most popular eco-friendly products
          </p>
        </div>
    
        {/* Product Grid */}
        <div className="max-w-7xl mx-auto px-4 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products?.length > 0 ? (
            products?.map((product) => (
              <ProductCard key={product._id} products={product} />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">
              No trending products available.
            </p>
          )}
        </div>
      </section>
  )
}

export default Products