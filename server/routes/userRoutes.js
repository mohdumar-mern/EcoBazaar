import express from 'express';

const router = express.Router();
import { registerUser } from '../controllers/userController.js';

// User Registration Route
router.route('/register').post(registerUser);

export default router;