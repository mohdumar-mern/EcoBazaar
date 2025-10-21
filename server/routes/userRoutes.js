import express from 'express';

const router = express.Router();
import { registerUser, loginUser, logoutUser, forgotPassword, resetPassword } from '../controllers/userController.js';

// User Registration Route
router.route('/register').post(registerUser);
// User Login Route
router.route('/login').post(loginUser);

// User Logout Route
router.route('/logout').post(logoutUser);
router.route('/password/forgot').post(forgotPassword);
router.route('/password/reset/:token').post(resetPassword);


export default router;