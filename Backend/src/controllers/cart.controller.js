import express from "express";
import User from "../models/user.model.js";
import Book from "../models/book.model.js";
import asyncHandler from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import ApiResponse from "../utils/apiResponse.js";
import cartModel from "../models/cart.model.js";


//add book
//edit book
//getbooks
//getbookbyid
//deletebook

const router = express.Router();

//Add to cart 
const addToCart = asyncHandler(async(req,res)=>{
    const{bookId, quantity} = req.body;
    const userId = req.user?._id;

    //validate product 
    const book = await Book.findById(bookId);
    console.log(`this is the book ${book}`)
    if(!book){
        throw new ApiError(404, "Book not found");
    }
    //Find users cart 
    let cart = await cartModel.findOne({userId});
    if(!cart){
        cart = new cartModel({userId,items:[],totalPrice: 0})
        console.log("Cart retrieved or created successfully")
    }

    
    //check if the product is already in the cart 
    const itemIndex = cart.items.findIndex((item) => item.bookId.toString() === bookId);

    // .findIndex() goes through each item in the items array
    //  returns the index of the product in the array if it exists; otherwise, it returns -1.
    if (!quantity || quantity <= 0) {
        throw new ApiError(400, "Quantity must be greater than 0");
      }
      
    if(itemIndex >-1){
        //Update quantity if product exists in the cart
        cart.items[itemIndex].quantity += quantity;
    }
    else{
        cart.items.push({bookId,quantity});
    }
        //Recalculating the total price
        let totalPrice = 0;

        // Iterate over each item in the cart
        for (const item of cart.items) {
          // Fetch the book details by its ID
          const book = await Book.findById(item.bookId);
          if (!book) {
            throw new ApiError(404, "Book not found");
          }
        
          // Add the price of the book * quantity to the total price
          totalPrice += item.quantity * book.price;
        }
        
        // Set the total price in the cart
        cart.totalPrice = totalPrice;
        
      // Save the cart to the database

    const savedCart = await cart.save();
    console.log("Item is added to the cart")
    //Respond to the client
    return res.status(200).json(new ApiResponse(200,savedCart,"Item added to cart successfully"));

})


// //get Cartdetails


// const getCartDetails = asyncHandler(async(req,res)=>{
//     const userId = req.user?._id;// Get the user ID from the request
    
//     //Find cart of the user 
//     const cart = await cartModel.findOne({userId}).populate("items.bookId","bookName,coverImage,price")

// })


export default addToCart;
