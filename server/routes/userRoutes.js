import express from 'express';

const router = express.Router();
import { registerUser, loginUser, logoutUser, forgotPassword, resetPassword, getUserDetails } from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';

// User Registration Route
router.route('/register').post(registerUser);
// User Login Route
router.route('/login').post(loginUser);

// User Logout Route
router.route('/logout').post(logoutUser);
router.route('/password/forgot').post(forgotPassword);
router.route('/password/reset/:token').post(resetPassword);
router.route('/profile').get(protect,getUserDetails)


export default router;