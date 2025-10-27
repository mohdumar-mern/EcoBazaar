import {  ProductCard } from '@/components/ProductCard'
import React from 'react'

const Trending = () => {

  const products = [
     {
            "_id": "68f33108f58f7ca6599f3be0",
            "name": "tshirt",
            "description": "This Jeans is very Beautiful",
            "price": 400,
            "ratings": 0,
            "category": "Clothing",
            "stock": -2,
            "numOfReviews": 0,
            "images": [
             { "url": "https://cdn.pixabay.com/photo/2024/04/29/04/21/tshirt-8726716_640.jpg"}

            ],
  "reviews": [
                {
                    "user": "68f8730a68ffe8a7dd74acb7",
                    "name": "Mohd Umar",
                    "rating": 4,
                    "comment": "This Xiomi laptop is good",
                    "_id": "68fdcc95abf45df80d696cef"
                },
                {
                    "user": "68fc86f250dda1cb430febd5",
                    "name": "Umar Azmi",
                    "rating": 4,
                    "comment": "This Xiomi laptop is good",
                    "_id": "68fdcd29abf45df80d696cf9"
                }
            ],            "createdAt": "2025-10-18T06:17:44.171Z",
            "updatedAt": "2025-10-26T10:57:02.082Z",
            "__v": 1
        },
        {
            "_id": "68f3310ff58f7ca6599f3be2",
            "name": "Jeans",
            "description": "This Jeans is very Beautiful",
            "price": 400,
            "ratings": 3,
            "category": "Clothing",
            "stock": 2,
            "numOfReviews": 1,
            "images": [
             { "url": "https://cdn.pixabay.com/photo/2024/04/29/04/21/tshirt-8726716_640.jpg"}
            ],
            "reviews": [
                {
                    "name": "Mohd Umar",
                    "rating": 3,
                    "comment": "This t-shirt is very Good Product",
                    "_id": "68fdc942a0e834e8fa82d903"
                }
            ],
            "createdAt": "2025-10-18T06:17:51.013Z",
            "updatedAt": "2025-10-26T07:09:54.752Z",
            "__v": 1
        },
        {
            "_id": "68f3310ff58f7ca6599f3be2",
            "name": "Jeans",
            "description": "This Jeans is very Beautiful",
            "price": 400,
            "ratings": 3.5,
            "category": "Clothing",
            "stock": 2,
            "numOfReviews": 1,
            "images": [
             { "url": "https://cdn.pixabay.com/photo/2024/04/29/04/21/tshirt-8726716_640.jpg"}
            ],
            "reviews": [
                {
                    "name": "Mohd Umar",
                    "rating": 3,
                    "comment": "This t-shirt is very Good Product",
                    "_id": "68fdc942a0e834e8fa82d903"
                }
            ],
            "createdAt": "2025-10-18T06:17:51.013Z",
            "updatedAt": "2025-10-26T07:09:54.752Z",
            "__v": 1
        },
        {
            "_id": "68f3310ff58f7ca6599f3be2",
            "name": "Jeans",
            "description": "This Jeans is very Beautiful",
            "price": 400,
            "ratings": 3,
            "category": "Clothing",
            "stock": 2,
            "numOfReviews": 1,
            "images": [
             { "url": "https://cdn.pixabay.com/photo/2024/04/29/04/21/tshirt-8726716_640.jpg"}
            ],
            "reviews": [
                {
                    "name": "Mohd Umar",
                    "rating": 3,
                    "comment": "This t-shirt is very Good Product",
                    "_id": "68fdc942a0e834e8fa82d903"
                }
            ],
            "createdAt": "2025-10-18T06:17:51.013Z",
            "updatedAt": "2025-10-26T07:09:54.752Z",
            "__v": 1
        },
        {
            "_id": "68f3310ff58f7ca6599f3be2",
            "name": "Jeans",
            "description": "This Jeans is very Beautiful",
            "price": 400,
            "ratings": 3,
            "category": "Clothing",
            "stock": 2,
            "numOfReviews": 1,
            "images": [
             { "url": "https://cdn.pixabay.com/photo/2024/04/29/04/21/tshirt-8726716_640.jpg"}
            ],
            "reviews": [
                {
                    "name": "Mohd Umar",
                    "rating": 3,
                    "comment": "This t-shirt is very Good Product",
                    "_id": "68fdc942a0e834e8fa82d903"
                }
            ],
            "createdAt": "2025-10-18T06:17:51.013Z",
            "updatedAt": "2025-10-26T07:09:54.752Z",
            "__v": 1
        },
        {
            "_id": "68f3310ff58f7ca6599f3be2",
            "name": "Jeans",
            "description": "This Jeans is very Beautiful",
            "price": 400,
            "ratings": 3,
            "category": "Clothing",
            "stock": 2,
            "numOfReviews": 1,
            "images": [
             { "url": "https://cdn.pixabay.com/photo/2024/04/29/04/21/tshirt-8726716_640.jpg"}
            ],
            "reviews": [
                {
                    "name": "Mohd Umar",
                    "rating": 3,
                    "comment": "This t-shirt is very Good Product",
                    "_id": "68fdc942a0e834e8fa82d903"
                }
            ],
            "createdAt": "2025-10-18T06:17:51.013Z",
            "updatedAt": "2025-10-26T07:09:54.752Z",
            "__v": 1
        },
        {
            "_id": "68f3310ff58f7ca6599f3be2",
            "name": "Jeans",
            "description": "This Jeans is very Beautiful",
            "price": 400,
            "ratings": 3,
            "category": "Clothing",
            "stock": 2,
            "numOfReviews": 1,
            "images": [
             { "url": "https://cdn.pixabay.com/photo/2024/04/29/04/21/tshirt-8726716_640.jpg"}
            ],
            "reviews": [
                {
                    "name": "Mohd Umar",
                    "rating": 3,
                    "comment": "This t-shirt is very Good Product",
                    "_id": "68fdc942a0e834e8fa82d903"
                }
            ],
            "createdAt": "2025-10-18T06:17:51.013Z",
            "updatedAt": "2025-10-26T07:09:54.752Z",
            "__v": 1
        },
        {
            "_id": "68f3310ff58f7ca6599f3be2",
            "name": "Jeans",
            "description": "This Jeans is very Beautiful",
            "price": 400,
            "ratings": 3,
            "category": "Clothing",
            "stock": 2,
            "numOfReviews": 1,
            "images": [
             { "url": "https://cdn.pixabay.com/photo/2024/04/29/04/21/tshirt-8726716_640.jpg"}
            ],
            "reviews": [
                {
                    "name": "Mohd Umar",
                    "rating": 3,
                    "comment": "This t-shirt is very Good Product",
                    "_id": "68fdc942a0e834e8fa82d903"
                }
            ],
            "createdAt": "2025-10-18T06:17:51.013Z",
            "updatedAt": "2025-10-26T07:09:54.752Z",
            "__v": 1
        },
  ]
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
        products.map((product) => (
          <ProductCard key={product._id} products={product} />
        ))
      ) : (
        <p className="col-span-full text-center text-gray-500">
          No trending products available.
        </p>
      )}
    </div>
  </section>
);

}

export default Trending