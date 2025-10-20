import express from 'express';

const router = express.Router();
import { registerUser, loginUser } from '../controllers/userController.js';

// User Registration Route
router.route('/register').post(registerUser);
// User Login Route
router.route('/login').post(loginUser);


export default router;