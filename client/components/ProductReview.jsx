import React from 'react'
import Rating from './Rating'

const ProductReview = ({product}) => {
  return (

     <div className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6 border-b border-gray-200 pb-2">
          Customer Reviews
        </h2>
      {product?.reviews && product.reviews.length > 0 ? (
             <div className="space-y-5">
               {product.reviews.map((rev, index) => (
                 <div
                   key={index}
                   className="p-5 border border-gray-200 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all duration-200"
                 >
                   <div className="flex items-center justify-between mb-2">
                     <h3 className="font-semibold text-gray-800">{rev.name}</h3>
                     <Rating value={rev.rating} showValue />
                   </div>
   
                   <p className="text-gray-700 leading-relaxed">{rev.comment}</p>
   
                   <p className="text-xs text-gray-500 mt-3">
                     Reviewed on {new Date(rev.createdAt).toLocaleDateString()}
                   </p>
                 </div>
               ))}
             </div>
           ) : (
             <p className="text-gray-500 italic">No reviews yet. Be the first to review!</p>
           )}
         </div>
  )
}

export default ProductReview