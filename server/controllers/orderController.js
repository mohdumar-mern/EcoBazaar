import asyncHandler from "express-async-handler";
import Order from "../models/orderModel.js";
import HandleError from "../utils/handleError.js";
import Product from "../models/productModel.js";
import User from "../models/userModel.js";

// @desc Create new Order
// @route POST /api/v1/order/new
export const newOrder = asyncHandler(async (req, res) => 
{
    const {
        orderItems,
        shippingInfo,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
        paymentInfo
    } = req.body;
    const order = await Order.create({
        orderItems,
        shippingInfo,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
        paymentInfo,
        paidAt: Date.now(),
        user: req.user._id
    });

    res.status(201).json({
        success: true,
        order
    });
}); 