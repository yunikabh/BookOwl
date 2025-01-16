import express from "express";
import asyncHandler from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import ApiResponse from "../utils/apiResponse.js";
import authorModel from "../models/author.model.js";import reviewModel from "../models/review.model.js"
import Book from "../models/book.model.js";
import mongoose from "mongoose";
import Review from "../models/review.model.js";



const addReviewAndRating = asyncHandler(async(req,res) =>{
        try {
          const { bookId, rating, reviewText } = req.body;
          const userId = req.user._id; // Assuming user is authenticated
      
          // Check if the book exists
          const book = await Book.findById(bookId);
          if (!book) {
            return res.status(404).json({ message: "Book not found" });
          }
      
          // Check if the user has already reviewed the book
          const existingReview = await Review.findOne({ book: bookId, user: userId });
      
          if (existingReview) {
            // Update the existing review
            existingReview.rating = rating;
            existingReview.reviewText = reviewText;
            await existingReview.save();
          } else {
            // Create a new review
            await Review.create({
              book: bookId,
              user: userId,
              rating,
              reviewText
            });
          }
      
          // Recalculate average rating using aggregation
          const result = await reviewModel.aggregate([
            { $match: { book: mongoose.Types.ObjectId(bookId) } },
            {
              $group: {
                _id: "$book",
                averageRating: {$avg: "$rating"},
                ratingsCount: { $sum: 1 },
                totalRatings: { $sum: "$rating" }
              }
            }
          ]);
          // let averageRating = 0;
          // let totalReviews = 0;

      
          if (result.length) {
            const { averageRating, ratingsCount, totalRatings } = result[0];
      
            // Update the book's rating fields
            Book.averageRating = averageRating;
            Book.ratingsCount = ratingsCount;
            Book.totalRatings = totalRatings;
            await Book.save();
          }
          res.status(200).json(new ApiResponse(200,"Review added/updated successfully"));
        } catch (error) {
              throw new ApiError(500,error.message)
        }
      });

//Delete review 

// const deleteReview = asyncHandler(async(req,res)=>{
// try{
//   const {reviewId} = req.params;
//   //check if review exixts 
//   const review = await Review.findById(reviewId);
//   clg("This is review", review);
//   if(!review){
//     throw new ApiError(404,"Review not found");

//   }


// })