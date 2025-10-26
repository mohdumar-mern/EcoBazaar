import expres from "express";
const router = expres.Router();

import { getSingleOrder, newOrder } from "../controllers/orderController.js";
import { protect, roleBasedAccess } from "../middleware/authMiddleware.js";

router.route("/order/new")
    .post(protect, newOrder);  // create new order
router.route("/admin/order/:id")
    .get(protect, roleBasedAccess("admin"), getSingleOrder);  // get single order by admin

export default router;