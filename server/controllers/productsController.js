import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'
import HandleError from '../utils/handleError.js'




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
export const getProducts = asyncHandler(async (req, res, next) => {
    const products = await Product.find()
    if (!products) {
        return next(new HandleError('No products found', 404))
    }

    res.status(200).json({
        success: true,
        count: products.length,
        products
    })
})

// @desc Get Single Product
// @route GET /api/v1/products/:id
export const getProduct = asyncHandler(async (req, res, next) => {
    const product = await Product.findById(req.params.id)
    if (!product) {
        return next(new HandleError('Product not found', 404))
    }
    res.status(200).json({
        success: true,
        product
    })
})



// @desc Update Product
// @route PUT /api/v1/products/:id
export const updateProduct = asyncHandler(async (req, res) => {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
    if (!product) {
        return next(new HandleError('Product not found', 404))
    }
    res.status(200).json({
        success: true,
        product
    })

})

// @desc Delete Product
// @route DELETE /api/v1/products/:id
export const deleteProduct = asyncHandler(async (req, res) => {

    const product = await Product.findByIdAndDelete(req.params.id)
    if (!product) {
        return next(new HandleError('Product not found', 404))
    }
    res.status(200).json({
        success: true,
        message: 'Product deleted'
    })
})
