// "use client";

// import React from "react";
// import { useParams, useRouter } from "next/navigation";
// import { useGetProductQuery } from "@/app/features/product/productApiSlice";
// import Loader from "@/components/Loader";
// import Image from "next/image";
// import Rating from "@/components/Rating";
// import { Button } from "@/components/ui/Button";
// import { ShoppingCart } from "lucide-react";
// import ProductReview from "@/components/ProductReview";

// const ProductPage = () => {
//   const params = useParams();
//   const router = useRouter();
//   const id = params?.id;



//   // ✅ Fetch product data from RTK Query
//   const { data, isLoading, isError, error } = useGetProductQuery(id);
//   const product = data?.product || data;

//   // ✅ Handle rating change
//   const handleRatingChange = (newRating) => {
//     console.log(`New rating selected: ${newRating}`);
//   };

//   // ✅ Handle Add to Cart (safe guard)
//   const handleAddToCart = (e) => {
//     e.stopPropagation();
//     if (!product?._id) {
//       console.warn("Product not loaded yet, cannot add to cart.");
//       return;
//     }
//     console.log("Added to cart:", product._id);
//     router.push("/cart");
//   };

//   // ✅ Handle review form submit
//   const handleReviewSubmit = (e) => {
//     e.preventDefault();
//     const reviewText = e.target.review.value.trim();
//     if (!reviewText) return;
//     console.log("Review submitted:", reviewText);
//     e.target.reset();
//   };

//   if (isLoading) return <Loader />;
//   if (isError)
//     return (
//       <p className="text-center text-red-500">
//         Error: {error?.message || "Something went wrong"}
//       </p>
//     );

//   if (!product) return <p className="text-center">Product not found.</p>;

//   return (
//     <div className="p-6 max-w-7xl mx-auto">
//       {/* Header */}
//       {/* <h1 className="text-3xl font-bold text-green-700 mb-6 text-center">
//         Product Details
//       </h1> */}

//       {/* Main Grid */}
//       <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-100 grid gap-8 md:grid-cols-2 hover:shadow-xl transition-shadow duration-300">
//         {/* Left: Image */}
//         <div className="flex justify-center items-center">
//           <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm w-full max-w-md">
//             <Image
//               src={
//                 product?.images?.[0]?.url ||
//                 "https://cdn.pixabay.com/photo/2024/04/29/04/21/tshirt-8726716_640.jpg"
//               }
//               alt={product?.name || "Product"}
//               width={400}
//               height={400}
//               className="w-full aspect-square object-cover transition-transform duration-500 hover:scale-105"
//               priority
//             />
//           </div>
//         </div>

//         {/* Right: Product Info */}
//         <div className="flex flex-col justify-between">
//           <div>
//             <h2 className="text-2xl font-semibold text-gray-800 mb-2">
//               {product?.name}
//             </h2>
//             <p className="text-gray-600 mb-4">{product?.description}</p>

//             <p className="text-xl text-green-600 font-bold mb-2">
//               ₹{product?.price}
//             </p>

//             <p className="text-gray-500 mb-1">
//               <span className="font-semibold">Category:</span>{" "}
//               {product?.category}
//             </p>
//             <p className="text-gray-400 text-sm mb-4">
//               Product ID: {product?._id}
//             </p>

//             <Rating
//               value={product.ratings}
//               showValue
//               onClick={handleRatingChange}
//             />
//             <p className="text-sm text-gray-500 mt-1">
//               Reviews: {product.numOfReviews}
//             </p>
//             <p className="text-sm text-gray-500">In stock: {product.stock}</p>
//           </div>

//           {/* Quantity Selector */}
//           <div className="mt-6">
//             <label
//               htmlFor="quantity"
//               className="block text-gray-800 font-semibold mb-2 text-sm uppercase tracking-wide"
//             >
//               Quantity
//             </label>

//             <div className="flex items-center gap-3">
//               <input
//                 type="number"
//                 id="quantity"
//                 name="quantity"
//                 min="1"
//                 max={product?.stock || 1}
//                 defaultValue="1"
//                 className="w-24 p-2 border border-gray-300 rounded-xl text-center font-medium text-gray-800
//       focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
//               />

//               <span
//                 className={`text-sm font-medium ${product?.stock > 0 ? 'text-green-600' : 'text-red-500'
//                   }`}
//               >
//                 {product?.stock > 0
//                   ? `In stock: ${product.stock}`
//                   : 'Out of stock'}
//               </span>
//             </div>
//           </div>


//           <div className="mt-6">
//             <Button
//               variant="outline"
//               className="flex items-center gap-2 text-green-600 border-green-500 hover:bg-green-600 hover:text-white transition-colors w-full md:w-auto"
//               onClick={handleAddToCart}
//             >
//               <ShoppingCart size={18} />
//               Add To Cart
//             </Button>
//           </div>
//         </div>
//       </div>

//       {/* Review Section */}
//       <div className="mt-10 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
//         <h2 className="text-2xl font-semibold text-gray-800 mb-3">Reviews</h2>
//         <p className="text-gray-600 mb-4">Write your review below</p>

//         <form
//           className="flex flex-col gap-3 w-full"
//           onSubmit={handleReviewSubmit}
//         >
//           <textarea
//             name="review"
//             rows="4"
//             placeholder="Write your review..."
//             className="p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-green-500 transition"
//           />
//           <Button
//             type="submit"
//             variant="outline"
//             className="self-start flex items-center gap-2 text-white border-black bg-gray-950 hover:bg-gray-800 hover:text-white transition-colors"
//           >
//             Submit Review
//           </Button>
//         </form>
//       </div>

//       {/* Display Reiviews here */}
//       <ProductReview product={product} />

//     </div>
//   );
// };

// export default ProductPage;
