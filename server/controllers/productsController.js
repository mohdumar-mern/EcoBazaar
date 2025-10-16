import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'




// @desc Post Product
// @route POST /api/v1/products
export const createProduct = asyncHandler(async (req, res) => {
 const product = await Product.create(req.body)
 res.status(201).json({
    success: true,
    product
 })
})





// @desc Get All Product
// @route GET /api/v1/products
export const getProducts = asyncHandler(async (req, res) => {
  res.send('Get All Products')
})

// @desc Get Single Product
// @route GET /api/v1/products/:id
export const getProduct = asyncHandler(async (req, res) => {
  res.send('Get Single Product')
})



// @desc Update Product
// @route PUT /api/v1/products/:id
export const updateProduct = asyncHandler(async (req, res) => {
    res.send('Update Product')
})

// @desc Delete Product
// @route DELETE /api/v1/products/:id
export const deleteProduct = asyncHandler(async (req, res) => {
    res.send('Delete Product')
})
