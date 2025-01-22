import express from "express";
// import User from "../models/user.model.js";
import Book from "../models/book.model.js";
import asyncHandler from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import ApiResponse from "../utils/apiResponse.js";
import authorModel from "../models/author.model.js";
import categoryModel from "../models/category.model.js";
import mongoose from "mongoose";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

//add book
//edit book
//getbooks
//getbookbyid
//deletebook

const router = express.Router();

//add book
const addBook = asyncHandler(async (req, res) => {
  const bookDetails = req.body;
  const authorName = bookDetails.author;
  let categoryIds = bookDetails.category;
  console.log("This is category ids", categoryIds);
  // const coverLocalPath = req.files?req.file.path : null;

  const coverImageLocalPath = req.file ? req.file.path : null;
  console.log("FILE", req.file);

  if (!coverImageLocalPath) {
    throw new ApiError(400, "Cover image is required");
  }

  const coverImageURL = await uploadOnCloudinary(coverImageLocalPath);
  console.log("Cover Image Local Path:", coverImageLocalPath); // Debugging
  console.log("This is cover image url", coverImageURL);
  // Check if the upload to Cloudinary was successful
  if (!coverImageURL || !coverImageURL.url) {
    throw new ApiError(500, "Failed to upload cover image");
  }
  bookDetails.coverImage = coverImageURL.url;

  // check if the book is added already or not
  try {
    const existingBook = await Book.findOne({ ISBN: bookDetails.ISBN })
      .populate("category")
      .populate("author");

    console.log("this is ", existingBook);
    let author = await authorModel.findOne({ authorName });
    console.log("this is ", author);

    if (!author) {
      return res
        .status(404)
        .json(
          new ApiError(
            404,
            "Author not found",
            "The author does not exist in the database."
          )
        );
    }

    if (existingBook) {
      res
        .status(200)
        .json(
          new ApiResponse(
            200,
            existingBook,
            "Book already exists with this ISBN "
          )
        );
      }
      bookDetails.category = categoryIds;
      console.log("The book category",bookDetails.category);
      bookDetails.author = author._id;

      if (categoryIds && typeof categoryIds === "string") {
        // Split category IDs string into an array
        categoryIds = categoryIds.split(",").map((categoryId) => {
          if (mongoose.Types.ObjectId.isValid(categoryId)) {
            return new mongoose.Types.ObjectId(categoryId); // Convert to ObjectId
          } else {
            throw new ApiError(400, `Invalid category ID: ${categoryId}`);
          }
        });
      } else {
        categoryIds = []; // If no categories, set it as an empty array
      }
      

    //Creation on book
    const savedBook = await Book.create(bookDetails);
    console.log("Creating book with details:", bookDetails);
    const populatedBook = await Book.findById(savedBook._id)
      .populate("category", "categoryName")
      .populate("author");
    res
      .status(201)
      .json(new ApiResponse(201, populatedBook, "Book added successfully"));
  } catch (error) {
    throw new ApiError(404, "Book not added", error.message);
  }
});

//getBooks all
const getBooks = asyncHandler(async (req, res) => {
  try {
    const books = await Book.find()
      .populate("category", "categoryName")
      .populate("author");
    if (books.length === 0) {
      throw new ApiError(404, "Book not found");
    }

    res
      .status(200)
      .json(new ApiResponse(200, books, "Book successfully retrived"));
  } catch (error) {
    throw new ApiError(404, "Problem in fetching book", error.message);
  }
});

//getBooksById

const getBookById = asyncHandler(async (req, res) => {
  try {
    const id = req.params.id;
    const book = await Book.findById(id)
      .populate("category", "categoryName")
      .populate("author");
    if (!book) {
      throw new ApiError(404, "Book not found of this id");
    }
    console.log("THis is the book", book);
    res
      .status(200)
      .json(new ApiResponse(200, book, "Book is fetched through id"));
  } catch (error) {
    throw new ApiError(500, "Failed to fetch the book", error.message);
  }
});

//update Books
const updateBooks = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;
  const authorName = updatedData.author;
  let categoryIds = updatedData.category;

  console.log("This is updatedBook", updatedData);
  // const coverImage = updatedData.req.file;
  console.log("THis is coverImage:", updatedData.coverImage);

  const coverImageUpdateLocalPath = req.file ? req.file.path : null;
  console.log("FILE", req.file);

  if (!coverImageUpdateLocalPath) {
    throw new ApiError(400, "Cover image is required");
  }

  const coverImageUpdatedURL = await uploadOnCloudinary(
    coverImageUpdateLocalPath
  );
  console.log("Cover Image Local Path:", coverImageUpdateLocalPath); // Debugging
  console.log("This is cover image url", coverImageUpdatedURL);
  // Check if the upload to Cloudinary was successful
  if (!coverImageUpdatedURL || !coverImageUpdatedURL.url) {
    throw new ApiError(500, "Failed to upload cover image");
  }
  updatedData.coverImage = coverImageUpdatedURL.url;

  try {
    // Validate author, if provided
    let author = await authorModel.findOne({ authorName });
    if (!author) {
      throw new ApiError(400, "Invalid author ID. Author does not exist.");
    }

    // Replace the author name with the author's ObjectId
    updatedData.author = author._id;
    console.log("This is category ids:", categoryIds);
    updatedData.category = categoryIds;



    // Validate categories, if provided

    // Check if categoryIds is a string and needs to be split into an array
    // if (typeof categoryIds === "string") {
    //   // Split the comma-separated string into an array
    //   categoryIds = categoryIds.split(",").map((categoryId) => {
    //     // Trim any spaces around the IDs and convert to ObjectId
    //     const trimmedCategoryId = categoryId.trim();

    //     // Check if the ID is a valid ObjectId and convert it
    //     if (mongoose.Types.ObjectId.isValid(trimmedCategoryId)) {
    //       return new mongoose.Types.ObjectId(trimmedCategoryId); // Convert to ObjectId
    //     } else {
    //       throw new ApiError(400, `Invalid category ID: ${trimmedCategoryId}`);
    //     }
    //   });
    // } else if (Array.isArray(categoryIds)) {
    //   // If categoryIds is already an array, directly map it to ObjectIds
    //   categoryIds = categoryIds.map((categoryId) => {
    //     if (mongoose.Types.ObjectId.isValid(categoryId)) {
    //       return new mongoose.Types.ObjectId(categoryId); // Convert to ObjectId
    //     } else {
    //       throw new ApiError(400, `Invalid category ID: ${categoryId}`);
    //     }
    //   });
    // } else {
    //   categoryIds = []; // If no categories, set it as an empty array
    // }
    
    if (categoryIds && typeof categoryIds === "string") {
      // Split category IDs string into an array
      categoryIds = categoryIds.split(",").map((categoryId) => {
        if (mongoose.Types.ObjectId.isValid(categoryId)) {
          return new mongoose.Types.ObjectId(categoryId); // Convert to ObjectId
        } else {
          throw new ApiError(400, `Invalid category ID: ${categoryId}`);
        }
      });
    } else {
      categoryIds = []; // If no categories, set it as an empty array
    }


    // Update the book using findByIdAndUpdate with { new: true } to return the updated document
    const updateBook = await Book.findByIdAndUpdate(id, updatedData, {
      new: true,
    })
      .populate("category", "categoryName")
      .populate("author");

    if (!updateBook) {
      throw new ApiError(404, "Book not found");
    }

    res
      .status(200)
      .json(
        new ApiResponse(200, updateBook, "Book updated successfully", true)
      );
  } catch (error) {
    throw new ApiError(500, "Failed to update the book", error.message);
  }
});

//Delete books
const deleteBooks = asyncHandler(async (req, res) => {
  const id = req.params.id;

  try {
    const deletedBook = await Book.findByIdAndDelete(id);
    if (!deletedBook) {
      throw new ApiError(404, "Book not found");
    }
    res
      .status(200)
      .json(
        new ApiResponse(200, deletedBook, "Book deleted successfully", true)
      );
  } catch (error) {
    throw new ApiError(500, "Failed to delete the book", error.message);
  }
});

export { addBook, getBooks, getBookById, updateBooks, deleteBooks };
