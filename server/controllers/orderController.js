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

// @desc Admin Get Single Order
// @route GET /api/v1/admin/order/:id
export const getSingleOrder = asyncHandler(async (req, res, next) => {
    const order = await Order.findById(req.params.id).populate(
        "user",
        "name email"
    );
    if (!order) {
        return next(new HandleError("Order not found with this Id", 404));
    }
    res.status(200).json({
        success: true,
        order
    });
});


// @desc Get Logged in user Orders
// @route GET /api/v1/orders/me
export const myOrders = asyncHandler(async (req, res) => {
    const orders = await Order.find({ user: req.user._id });
    if (!orders) {
        return next(new HandleError("No orders found for this user", 404));
    }
    res.status(200).json({
        success: true,
        orders
    });
});