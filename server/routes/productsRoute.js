import express from 'express';
const router = express.Router();

import { getProducts, getProduct, createProduct, updateProduct, deleteProduct } from '../controllers/productsController.js';
import { protect } from '../middleware/authMiddleware.js';

// Routes for products
router.route('/products/').get(protect,getProducts).post(createProduct);
router.route('/product/:id').get(getProduct).put(updateProduct).delete(deleteProduct);

export default router;