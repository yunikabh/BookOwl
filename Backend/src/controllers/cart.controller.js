import express from "express";
import User from "../models/user.model.js";
import Book from "../models/book.model.js";
import asyncHandler from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import ApiResponse from "../utils/apiResponse.js";
import cartModel from  "../models/cart.model.js"
import mongoose from "mongoose";

//add book
//edit book
//getbooks
//getbookbyid
//deletebook

const router = express.Router();


//Add to cart
const addToCart = asyncHandler(async (req, res) => {
  const { bookId} = req.body;
  const userId = req.user?._id;

  //validate product
  const book = await Book.findById(bookId);
  console.log(`this is the book ${book}`);
  if (!book) {
    throw new ApiError(404, "Book not found");
  }
  //Find users cart
  let cart = await cartModel.findOne({ userId });

  if (!cart) {
    cart = new cartModel({ userId, items: [],totalPrice:0});
    console.log("Cart created successfully",cart);
  }

    const existingItemIndex = cart.items.findIndex((items) => items.bookId.toString() === bookId);
    console.log("This is ",existingItemIndex)
  if(!existingItemIndex){
    return res.status(200).json(new ApiResponse(200,null, "Book already in cart")); 
  }
//add book 
 cart.items.push({bookId,quantity:1,price:book.price});

 cart.totalPrice = cart.items.reduce((total,item) => total+ item.quantity *item.price,0);


  // .findIndex() goes through each item in the items array
  //  returns the index of the product in the array if it exists; otherwise, it returns -1.

  // if (!quantity || quantity <= 0) {
  //   throw new ApiError(400, "Quantity must be greater than 0");
  // }

  const savedCart = await cart.save();
  return res
    .status(200)
    .json(new ApiResponse(200, savedCart, "Item added to cart successfully"));
});

//get Cartdetails

const getCartDetails = asyncHandler(async (req, res) => {
  const userId = req.user?._id; // Get the user ID from the request

  //Find cart of the user
  const cart = await cartModel
    .findOne({ userId }).populate("items.bookId")


  if (!cart) {
    throw new ApiError(404, "Cart not found");
    
  }
  // Respond with the cart details
  res
    .status(200)
    .json(new ApiResponse(200, cart, "Cart retrieved successfully"));
});



//Update the cart items ( Remove items from cart)

const updateCart = asyncHandler(async (req, res) => {
  const { bookId, quantity } = req.body; // `quantity` indicates the increment (+1) or decrement (-1)
  const userId = req.user?._id;
  console.log("This is",quantity)

  // Find the user's cart
  const cart = await cartModel.findOne({ userId }).populate("items.bookId")
  if (!cart) {
    throw new ApiError(404, "Cart not found");
  }

  // Ensure the cart is not empty
  if (cart.items.length === 0) {
    return res
      .status(200)
      .json(new ApiResponse(200, null, "Cart is empty"));
  }
  if (!quantity || quantity === 0) {
      throw new ApiError(400, "Quantity must be greater than 0");
    }
  

  // // Find the index of the item to update
  // const bookIdObj = mongoose.Types.ObjectId(bookIdToUpdate);

  // Find the index of the item to update
  const itemIndex = cart.items.findIndex(
    (items) => items.bookId._id.toString() === bookId // Compare as string
  );

  // Check if the book exists in the cart
  if (itemIndex === -1) {
    throw new ApiError(404, "Book not found in cart");
  }
console.log("This is qty",cart.items[itemIndex])
  // Update the item's quantity
  const currentQuantity = cart.items[itemIndex].quantity || 1;
  let  newQuantity = currentQuantity + quantity;
  console.log("THis is ",newQuantity);
  if (newQuantity <= 0) {
    // If new quantity is 0 or less, remove the item from the cart
    cart.items.splice(itemIndex, 1);
  } else {
    // Otherwise, update the quantity
    cart.items[itemIndex].quantity = newQuantity;
  }


  // Recalculate the total price
  cart.totalPrice = cart.items.reduce((total,item) => total +  item.quantity *item.price,0)
  // Save the updated cart
  const updatedCart = await cart.save();

  // Return the updated cart with populated book details
  // const populatedCart = await cartModel
  //   .findById(updatedCart._id)
  //   .populate("items.bookId");

  res
    .status(200)
    .json(new ApiResponse(200, updatedCart, "Cart updated successfully"));
});




//Remove a item and recalculate the total price from cart 

const removeFromCart = asyncHandler(async (req, res) => {
  const { bookId } = req.body; // The ID of the book to be removed
  const userId = req.user?._id; // The ID of the user making the request

  // Find the user's cart
  const cart = await cartModel.findOne({ userId }).populate("items.bookId");
  if (!cart) {
    throw new ApiError(404, "Cart not found");
  }

  // Find the index of the item to remove
  const itemIndex = cart.items.findIndex(
    (item) => item.bookId._id.toString() === bookId
  );

  if (itemIndex === -1) {
    throw new ApiError(404, "Item not found in cart");
  }

  // Get the price of the item being removed for total price adjustment
  const book = await Book.findById(bookId);
  if (!book) {
    throw new ApiError(404, "Book not found");
  }

  cart.items = cart.items.filter((item) => item.bookId._id.toString() !== bookId);

  cart.totalPrice = cart.items.reduce((total, item) => total + item.quantity * item.price, 0);


  // Save the updated cart
  const updatedCart = await cart.save();

  
  return res
    .status(200)
    .json(new ApiResponse(200, updatedCart, "Item removed from cart successfully"));
});



//  Delete all items from the cart
const deleteCart = asyncHandler(async (req, res) => {
  const userId = req.user?._id;
  // Find the user's cart by userId
  const cart = await cartModel.findOne({ userId });

  if (!cart) {
    throw new ApiError(404, "Cart not found.");
  }

  // Clear all items from the cart
  cart.items = [];

  // Reset total price
  cart.totalPrice = 0;

  // Save the updated cart with no items
  const updatedCart = await cart.save();

  res
    .status(200)
    .json(new ApiResponse(200, updatedCart, "Cart deleted successfully"));
});

export { addToCart, getCartDetails, updateCart, deleteCart,removeFromCart };
