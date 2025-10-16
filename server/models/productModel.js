import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please Enter Product Name"],
            trim: true,
            maxlength: [100, "Product Name cannot exceed 100 characters"]
        },
        description: {
            type: String,
            required: [true, "Please Enter Product Description"],
            trim: true,
            maxlength: [1000, "Product Description cannot exceed 1000 characters"]
        },
        price: {
            type: Number,
            required: [true, "Please Enter Product Price"],
            maxlength: [10, "Product Price cannot exceed 10 characters"],
            default: 0.0
        },
        ratings: {
            type: Number,
            default: 0
        },
        images: [
            {
                public_id: {
                    type: String,
                    required: true
                },
                url: {
                    type: String,
                    required: true
                }
            }
        ],
        category: {
            type: String,
            required: [true, "Please Enter Product Category"],
            enum: {
                values: [
                    "Electronics", "Cameras", "Laptops", "Accessories", "Clothing", "Shoes", "Books", "Beauty", "Sports", "Home", "Kitchen", "Toys", "Furniture", "Others"
                ],
                message: "Please select correct category for product"
            }
        },
        stock: {
            type: Number,
            required: [true, "Please Enter Product Stock"],
            maxlength: [5, "Product Stock cannot exceed 5 characters"],
            default: 0
        },
        numOfReviews: {
            type: Number,
            default: 0
        },
        reviews: [
            {
                name: {
                    type: String,
                    required: true
                },
                rating: {
                    type: Number,
                    required: true
                },
                comment: {
                    type: String,
                    required: true
                }
            }
        ],

    },
    { timestamps: true }
)

const Product = mongoose.model("Product", productSchema);
export default Product;