import express from 'express';
const router = express.Router();

import { getProducts, getProduct, createProduct, updateProduct, deleteProduct } from '../controllers/productsController.js';
import { protect, roleBasedAccess } from '../middleware/authMiddleware.js';

// Routes for products
router.route('/products/').get(protect,getProducts).post(protect,roleBasedAccess('admin'),createProduct);
router.route('/product/:id').get(getProduct).put(roleBasedAccess('admin'),updateProduct).delete(roleBasedAccess('admin'),deleteProduct);

export default router;