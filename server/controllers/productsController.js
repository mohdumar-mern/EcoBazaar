import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'
import HandleError from '../utils/handleError.js'
import ApiFunctionality from '../utils/apiFunctionality.js'




// @desc Post Product
// @route POST /api/v1/products
export const createProduct = asyncHandler(async (req, res) => {
    req.body.user = req.user.id; // Assign the user ID from the authenticated user
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

// @desc Admin Get All Product
// @route DELETE /api/v1/admin/products
export const getAdminProducts = asyncHandler(async (req, res) => {
    const products = await Product.find()
    res.status(200).json({
        success: true,
        products
    })
})

// @desc Creating and Updating Review
// @route DELETE /api/v1
export const createProductReview = asyncHandler(async (req, res, next) => {
  const { rating, comment, productId } = req.body;

  // 1️⃣ Find product by ID
  const product = await Product.findById(productId);
  if (!product) {
    return next(new HandleError("Product not found", 404));
  }

  // 2️⃣ Create review object
  const review = {
    user: req.user._id,
    name: req.user.name,
    rating: Number(rating),
    comment,
  };

  // 3️⃣ Check if user has already reviewed
  const existingReview = product.reviews.find(
    (r) => r.user.toString() === req.user._id.toString()
  );

  if (existingReview) {
    // Update old review
    existingReview.comment = comment;
    existingReview.rating = Number(rating);
  } else {
    // Add new review
    product.reviews.push(review);
  }

  // 4️⃣ Update review count
  product.numOfReviews = product.reviews.length;

  // 5️⃣ Calculate average rating
  const totalRating = product.reviews.reduce((acc, item) => acc + item.rating, 0);
  product.ratings = totalRating / product.reviews.length;

  // 6️⃣ Save product without validation
  await product.save({ validateBeforeSave: false });

  res.status(200).json({
    success: true,
    message: existingReview
      ? "Review updated successfully"
      : "Review added successfully",
      product
  });
});
