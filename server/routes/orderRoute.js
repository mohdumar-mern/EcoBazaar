import expres from "express";
const router = expres.Router();

import { newOrder } from "../controllers/orderController.js";
import { protect } from "../middleware/authMiddleware.js";

router.post("/order/new",protect, newOrder);  // create new order

export default router;