import asyncHandler from "express-async-handler";
import Order from "../models/orderModel.js";
import HandleError from "../utils/handleError.js";
import Product from "../models/productModel.js";
import User from "../models/userModel.js";
import { updateStock } from "../utils/updateStock.js";

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

// @desc Admin Get All Orders
// @route GET /api/v1/admin/orders
export const getAllOrders = asyncHandler(async (req, res) => {
    const orders = await Order.find();
   if (!orders) {
        return next(new HandleError("No orders found", 404));
    }
    let totalAmount = 0;
    orders.forEach(order => {
        totalAmount += order.totalPrice;
    });
    res.status(200).json({
        success: true,
        totalAmount,
        orders  
    });
});

// @desc Admin Update Order Status
// @route PUT /api/v1/admin/order/:id
export const updateOrder = asyncHandler(async (req, res, next) => {
    const order = await Order.findById(req.params.id);
    if (!order) {
        return next(new HandleError("Order not found with this Id", 404));
    }
    if (order.orderStatus === "Delivered") {
        return next(new HandleError("You have already delivered this order", 400));
    }

    await Promise.all(
        order.orderItems.map(async (item) => {
            await updateStock(item.product, item.quantity);
        })
    );

    order.orderStatus = req.body.status;
    if (req.body.status === "Delivered") {
        order.deliveredAt = Date.now();
    }
    await order.save({ validateBeforeSave: false });
    res.status(200).json({
        success: true,
        order
    });
});

