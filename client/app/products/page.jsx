// "use client";

// export const dynamic = "force-dynamic";


// import React, { useState } from "react";
// import { ProductCard } from "@/components/ProductCard";
// import Loader from "@/components/Loader";
// import {
//   useGetProductsQuery,
//   selectAllProducts,
// } from "../features/product/productApiSlice";
// import { useSelector } from "react-redux";
// import PaginationComp from "@/components/Pagination";

// const Products = () => {
//   const [page, setPage] = useState(1);

//   // ✅ Fetch products from RTK Query
//   const { data, isLoading, isError, error } = useGetProductsQuery(page, {
//     refetchOnMountOrArgChange: true,
//   });
//   const { products } = data || {};
     
  

//   // ✅ Safely select products from normalized cache
//   // const products = useSelector((state) =>
//   //   data ? selectAllProducts(state) : []
//   // );
//   // console.log(products)

//   const totalPages = data?.totalPages || 1;
//   const currentPage = data?.currentPage || 1;

//   if (isLoading) return <Loader />;
//   if (isError)
//     return (
//       <p className="text-center text-red-500">
//         Error: {error?.data?.message || error?.error}
//       </p>
//     );

//   return (
//     <section className="py-10 bg-gray-50">
//       {/* Section Header */}
//       <div className="max-w-7xl mx-auto px-4 text-center mb-8">
//         <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
//           🌿 Trending Now
//         </h1>
//         <p className="text-gray-500 text-sm md:text-base">
//           Discover our most popular eco-friendly products
//         </p>
//       </div>

//       {/* Product Grid */}
//       <div className="max-w-7xl mx-auto px-4 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//         {products?.length > 0 ? (
//           products.map((product) => (
//             <ProductCard key={product.id || product._id} products={product} />
//           ))
//         ) : (
//           <p className="col-span-full text-center text-gray-500">
//             No trending products available.
//           </p>
//         )}
//       </div>

//       {/* Pagination */}
//       {totalPages > 1 && (
//         <PaginationComp
//           currentPage={currentPage}
//           totalPages={totalPages}
//           onPageChange={(newPage) => setPage(newPage)}
//         />
//       )}
//     </section>
//   );
// };

// export default Products;
