import express from 'express';
const router = express.Router();

import { getProducts, getProduct, createProduct, updateProduct, deleteProduct, getAdminProducts, createProductReview, getProductReviews } from '../controllers/productsController.js';
import { protect, roleBasedAccess } from '../middleware/authMiddleware.js';

// Routes for products
router.route('/products/').get(getProducts)
router.route('/admin/products/').get(protect,roleBasedAccess('admin'),getAdminProducts)
router.route('/admin/product/create')
.post(protect,roleBasedAccess('admin'),createProduct);
router.route('/product/:id').get(getProduct)
router.route('admin/product/:id')
.put(protect,roleBasedAccess('admin'),updateProduct)
.delete(protect,roleBasedAccess('admin'),deleteProduct);
router.route('/review').put(protect,createProductReview);
router.route('/reviews').get(protect,getProductReviews);

export default router;