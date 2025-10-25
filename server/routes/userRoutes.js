import express from 'express';

const router = express.Router();
import { registerUser, loginUser, logoutUser, forgotPassword, resetPassword, getUserDetails, updatePassword, updateUserProfile, getAdminUserList, getAdminUserDetails, adminChangeUserRole, adminDeleteUser} from '../controllers/userController.js';
import { protect, roleBasedAccess } from '../middleware/authMiddleware.js';

router.route('/register').post(registerUser); // User Registration Route
router.route('/login').post(loginUser);  // User Login Route
router.route('/logout').post(logoutUser);  // User Logout Route
router.route('/password/forgot').post(forgotPassword);  // Forgot Password Route
router.route('/password/reset/:token').post(resetPassword);  // Reset Password Route
router.route('/profile').get(protect,getUserDetails)  // Get User Details Route
router.route('/admin/users').get(protect,roleBasedAccess('admin'),getAdminUserList)  // Get Admin All Users Details Route
router.route('/admin/user/:id').get(protect,roleBasedAccess('admin'),getAdminUserDetails)  // Get Admin User Details Route
router.route('/password/update').put(protect,updatePassword)  // Update Password Route
router.route('/profile/update').put(protect,updateUserProfile)  // Update User Profile Route
router.route('/admin/user/:id/role').patch(protect,roleBasedAccess('admin'), adminChangeUserRole)  // Admin Change User Role Route
router.route('/admin/user/:id/delete').delete(protect,roleBasedAccess('admin'), adminDeleteUser)  // Admin Delete User Route


export default router;