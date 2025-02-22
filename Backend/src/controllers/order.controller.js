import express from "express";
import User from "../models/user.model.js";
import Book from "../models/book.model.js";
import cartModel from  "../models/cart.model.js"
import asyncHandler from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import ApiResponse from "../utils/apiResponse.js";
import Order from "../models/order.model.js";
import Payment from "../models/payment.model.js";
import { initializeKhaltiPayment } from "../utils/khalti.js";

//Create a new order
const createOrder = asyncHandler(async (req, res) => {
    try{
  const { name,phone,email,paymentMethod,shippingAddress} = req.body;
  console.log("Received shippingAddress:", req.body.shippingAddress);
  // console.log("Type of shippingAddress.city:", typeof req.body.shippingAddress.state);
  // console.log("Type of shippingAddress.city:", typeof req.body.shippingAddress.street);

  if (!req.body.shippingAddress || !req.body.shippingAddress.city || !req.body.shippingAddress.state) {
    return res.status(400).json({ message: "City and state are required in the shipping address." });
  }
  const userId = req.user?._id;

  //Validate user
  if (!userId) {
    throw new ApiError(401, "User ID is required to place an order.");
  }
  const cart = await cartModel.findOne({userId}).populate("items.bookId");
  if(!cart || cart.items.length === 0){
    throw new ApiError(400, "Cart is empty");
  }
 
  const orderItems = cart.items.map(item =>({
    bookId : item.bookId._id,
    quantity:item.quantity,
    price:item.price,
  }));
  const totalPrice = cart.totalPrice;

  const order = await Order.create({
    userId,
    items:orderItems,
    totalPrice: totalPrice,
    paymentMethod,
    paymentStatus: paymentMethod === "Cash on Delivery" ?"Pending" :"Pending",
    deliveryStatus:"Pending",
    customerDetails :{name,phone,email,shippingAddress},
  })
  await User.findByIdAndUpdate(userId, {
    $push: { orders: order._id },  // Pushing the new order's _id to the user's orders array
  });

  await cartModel.findOneAndDelete({userId});

  res.status(200).json(new ApiResponse(200,order,`${order._id}`))
}catch(error){
  console.error("Order creation error:", error);
throw new ApiError(500,"Internal server error")
}
});



const getOrderDetails = asyncHandler(async(req,res)=>{
   try{

    const order = await Order.find()
    .populate("userId","name,email,phone")
    .populate("items.bookId","bookName author price coverImage language averageRating")
    .exec();

    if(!order){
        throw new ApiError(404,"Order not found");

    }
    res.status(200).json(new ApiResponse(200,order,"Order details is retrived successfully ."))
  }
  catch(error){
    console.error("Error fetching order details:", error);
      throw new ApiError(500,"Internal Server Error ")
  }
})



export {createOrder,getOrderDetails};

