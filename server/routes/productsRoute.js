import express from 'express';
const router = express.Router();

import { getProducts, getProduct, createProduct, updateProduct, deleteProduct } from '../controllers/productsController.js';

// Routes for products
router.route('/').get(getProducts).post(createProduct);
router.route('/:id').get(getProduct).put(updateProduct).delete(deleteProduct);

export default router;