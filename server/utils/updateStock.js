import Product from "../models/productModel.js";

export const updateStock= async(id, quantity) => {
    const product = await Product.findById(id);
    product.stock -= quantity;
    await product.save({ validateBeforeSave: false });
}