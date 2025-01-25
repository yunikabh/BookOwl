import express from "express";
import mongoose from "mongoose";
// import User from "../models/user.model.js";
import Book from "../models/book.model.js";
import asyncHandler from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import ApiResponse from "../utils/apiResponse.js";
import categoryModel from "../models/category.model.js"
import { uploadOnCloudinary } from "../utils/cloudinary.js";

const router = express.Router();

//add category

const addCategory = asyncHandler(async(req,res) =>{
        const {name,description} = req.body;
        const categoryIcon = req.file;

        const categoryImageLocalPath = categoryIcon ? categoryIcon.path :null;

        console.log(categoryIcon);
        if(!categoryImageLocalPath){
                    throw new ApiError(400,"category image is required");

        }

      const categoryImageUrl=await  uploadOnCloudinary(categoryImageLocalPath);
      console.log("This is author image url",categoryImageUrl);

      if(!categoryImageUrl|| !categoryImageUrl.url){
        throw new ApiError(500, "Failed to upload category icon");
      }
      console.log("THis is category vitra ko url",categoryImageUrl.url)




            const existingCategory = await categoryModel.findOne({categoryName:name,categoryIcon:categoryImageUrl.url});
            if(existingCategory){
                throw  new ApiError(400,"Category already exists");
            }
    
            const category = new categoryModel({categoryName:name,categoryIcon:categoryImageUrl.url,description});
            const savedCategory = await category.save();
    
            res.status(201).json(new ApiResponse(201,savedCategory,"Category added successfully"));
            
});

//getAllCategory
const getCategory = asyncHandler(async(req,res)=>{
try {
    const allCategory = await categoryModel.find();
    if(allCategory.length === 0){ 
        throw new ApiError(404,"Categories not found")

    }
    res.status(200).json(new ApiResponse(200,allCategory,"All categories retrived successfully."));
   
} catch (error) {
    throw new ApiError(404,"Problem in fetching categories",error.message);
}
})

//Update category
const updateCategory = asyncHandler(async(req,res)=>{
    const {id} = req.params;
    const{name,description} = req.body;
    const categoryIcon = req.file;

    const categoryImageLocalPath = categoryIcon ? categoryIcon.path :null;

    console.log(categoryIcon);
    if(!categoryImageLocalPath){
                throw new ApiError(400,"category image is required");

    }

  const categoryImageUrl=await  uploadOnCloudinary(categoryImageLocalPath);
  console.log("This is author image url",categoryImageUrl);

  if(!categoryImageUrl|| !categoryImageUrl.url){
    throw new ApiError(500, "Failed to upload category icon");
  }
  console.log("THis is category vitra ko url",categoryImageUrl.url)

    try{
            const updatedCategory = await categoryModel.findByIdAndUpdate(id,{categoryName:name,categoryIcon:categoryImageUrl.url,description},{ new: true, runValidators: true });
            if(!updatedCategory){
                throw new ApiError(404, 'Category not found');
            }
            res.status(200).json(new ApiResponse(200, updatedCategory, 'Category updated successfully'));

    }
    catch(error){
        throw new ApiError(500, "Failed to update the book", error.message);

    }
})
//Delete Category
const deleteCategory = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const deletedCategory = await categoryModel.findByIdAndDelete(id);

    if (!deletedCategory) {
        throw new ApiError(404, 'Category not found');
    }

    res.status(200).json(new ApiResponse(200, deletedCategory, 'Category deleted successfully'));
});


//Filetring with category 
const getBooksByCategories = asyncHandler(async (req, res) => {
  
  try {
      
      const { categories } = req.query;
  
    // Ensure categories query param exists
    if (!categories) {
      throw new ApiError(400, "No categories provided");
    }
  
    // Split the category IDs and validate each one
    const categoryIds = categories.split(",").filter(mongoose.isValidObjectId);
  
    if (categoryIds.length === 0) {
      throw new ApiError(400, "Invalid category IDs");
    }
  
    // Fetch books that belong to any of the provided categories
    const books = await Book.find({ category: { $in: categoryIds } })
      .populate("category","categoryName")
      .populate("author") // If categories are referenced, populate their details
      .exec();
  
    if (!books || books.length === 0) {
      throw new ApiError(404, "No books found for the given categories");
    }
  
    res.status(200).json(new ApiResponse(200,books,"Books filtered successfully"))
    
  } catch (error) {
    throw new ApiError(400,"Something went wrong during filtering",error.message);
  }
});








export {
     addCategory,
     getCategory,
     updateCategory,
     deleteCategory,
     getBooksByCategories
    };