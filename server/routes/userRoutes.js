import express from 'express';

const router = express.Router();
import { registerUser, loginUser, logoutUser } from '../controllers/userController.js';

// User Registration Route
router.route('/register').post(registerUser);
// User Login Route
router.route('/login').post(loginUser);

// User Logout Route
router.route('/logout').post(logoutUser);


export default router;