import express from "express";
import asyncHandler from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import ApiResponse from "../utils/apiResponse.js";
import Book from "../models/book.model.js";
import mongoose from "mongoose";
import Review from "../models/review.model.js";



// Utility function to calculate book ratings
const calculateBookRatings = async (bookId) => {
  const result = await Review.aggregate([
    { $match: { book: new mongoose.Types.ObjectId(bookId) } },
    {
      $group: {
        _id: "$book",
        averageRating: { $avg: "$rating" },
        ratingsCount: { $sum: 1 },
        totalRatings: { $sum: "$rating" },
      },
    },
  ]);

  if (result.length > 0) {
    return result[0];
  } else {
    return {
      averageRating: 0,
      ratingsCount: 0,
      totalRatings: 0,
    };
  }
};

// Add or Update Review and Rating
const addReviewAndRating = asyncHandler(async (req, res) => {
  try {
    const { bookId, rating, reviewText } = req.body;
    const userId = req.user._id; // Assuming user is authenticated

    const book = await Book.findById(bookId);
    if (!book) {
      return res.status(404).json(new ApiResponse(null, 404, "Book not found"));
    }

    const existingReview = await Review.findOne({ book: bookId, user: userId });
    if (existingReview) {
      res.status(404).json(new ApiResponse(existingReview, 404, "Review already exists"));

    } else {
      await Review.create({ book: bookId, user: userId, rating, reviewText });
    }

    const { averageRating, ratingsCount, totalRatings } = await calculateBookRatings(bookId);
    book.averageRating = averageRating;
    book.ratingsCount = ratingsCount;
    book.totalRatings = totalRatings;
    await book.save();

    res.status(200).json(new ApiResponse(null, 200, "Review added successfully"));
  } catch (error) {
    throw new ApiError(500, error.message);
  }
});

// Update Review and Recalculate Ratings
const updateReviewAndRating = asyncHandler(async (req, res) => {
  try {
    const { reviewId } = req.params;
    const { rating, reviewText } = req.body;

    const review = await Review.findById(reviewId);
    if (!review) {
      return res.status(404).json(new ApiResponse(null, 404, "Review not found"));
    }
      const updatedReview = await Review.findByIdAndUpdate(reviewId,{rating,reviewText},{ new: true });
   
      // review.rating = rating;
      // review.reviewText = reviewText;
      // await review.save();
      
      
      const { averageRating, ratingsCount, totalRatings } = await calculateBookRatings(review.book);
      const book = await Book.findById(review.book);
      book.averageRating = averageRating;
      book.ratingsCount = ratingsCount;
      book.totalRatings = totalRatings;
      await book.save();
      res
      .status(200)
      .json(new ApiResponse(200,updatedReview,"Review updated successfully"));
      
  } catch (error) {
    throw new ApiError(500, error.message);
  }
});

// Delete Review and Update Ratings
const deleteReviewAndRating = asyncHandler(async (req, res) => {
  try {
    const { reviewId } = req.params;

    const review = await Review.findById(reviewId);
    if (!review) {
      return res.status(404).json(new ApiResponse(null, 404, "Review not found"));
    }

    const bookId = review.book;
    await Review.findByIdAndDelete(reviewId);

    const { averageRating, ratingsCount, totalRatings } = await calculateBookRatings(bookId);
    const book = await Book.findById(bookId);
    book.averageRating = averageRating;
    book.ratingsCount = ratingsCount;
    book.totalRatings = totalRatings;
    await book.save();

    res.status(200).json(new ApiResponse(null, 200, "Review deleted successfully"));
  } catch (error) {
    throw new ApiError(500, error.message);
  }
});

export {
  addReviewAndRating,
  updateReviewAndRating,
  deleteReviewAndRating,
};