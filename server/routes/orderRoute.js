import expres from "express";
const router = expres.Router();

import { getAllOrders, getSingleOrder, myOrders, newOrder } from "../controllers/orderController.js";
import { protect, roleBasedAccess } from "../middleware/authMiddleware.js";

router.route("/order/new")
    .post(protect, newOrder);  // create new order
router.route("/admin/order/:id")
    .get(protect, roleBasedAccess("admin"), getSingleOrder);  // get single order by admin
router.route("/orders/me")
    .get(protect, myOrders);  // get logged in user orders
router.route("/admin/orders").get(protect, roleBasedAccess("admin"), getAllOrders); // get all orders by admin


export default router;