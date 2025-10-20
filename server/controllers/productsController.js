import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'
import HandleError from '../utils/handleError.js'
import ApiFunctionality from '../utils/apiFunctionality.js'




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
    const resultsPerPage = parseInt(req.query.pageSize) || 8;
  // Initialize ApiFunctionality with query and query string
  const api = new ApiFunctionality(Product.find(), req.query).search().filter();
  // Getting filterd query before pagination
    const filteredProductsCount = await api.query.clone().countDocuments();
    // Calculate Total pages based on the filtered products count
    const totalPages = Math.ceil(filteredProductsCount / resultsPerPage); 
    const page = parseInt(req.query.page) || 1;
    // Ensure current page does not exceed total pages
    if (page > totalPages && totalPages > 0) {
      return next(new HandleError("Page number exceeds total pages", 404));
    }

    // Apply pagination
    api.pagination(resultsPerPage);
  // Execute the query
  const products = await api.query.exec();

  // Check if any products were found
//   if (!products || products.length === 0) {
//     return next(new HandleError("No products found", 404));
//   }

  // Send response
  res.status(200).json({
    success: true,
    products,
    filteredProductsCount,
    resultsPerPage,
    totalPages,
    currentPage: page


  });
});

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
