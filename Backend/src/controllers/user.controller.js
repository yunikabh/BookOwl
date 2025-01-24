import express from "express";
import User from "../models/user.model.js";
import asyncHandler from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import ApiResponse from "../utils/apiResponse.js";
import { verifyUser } from "../middlewares/auth.middleware.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
const router =express.Router();

//getallUser
  const getUser = asyncHandler(async(req,res) =>{
      try {
        const users = await User.find();
        if(!users){
          throw new ApiError(404,"Users not found");
        }
        res.status(200).json(new ApiResponse(200,users,"User fetched successfully"));
        
      } catch (error) {
        throw new ApiError(404,users,"User not found",error.message);
      }

  })

//get user
const getUserById = asyncHandler(async (req, res) => {
 
   try {
     const userId  = req.params.id;
     const user = await User.findById(userId);
     if (!user) {
       throw new ApiError(404, "User not found");
     }
     
       res
         .status(200)
         .json(new ApiResponse(200, user, "User fetched successfully"));
     
   } catch (error) {
     console.log("Error during fetching user: ", error.message);
     throw new ApiError(500, error.message || "Error fetching user");
   }
 });
 
 const updateUserProfile = asyncHandler(async(req,res) =>{
   try {
          const userId = req.user._id;
          const userImage = req.file;
    console.log("this is userId" , userId);
          if(!userImage){
            throw new ApiError(400,"User image is needed");
          }
            const userImageLocalPath = userImage?userImage.path : null;
         const userImageUrl = await  uploadOnCloudinary(userImageLocalPath);
          
         if(!userImageUrl || !userImageUrl.url){
          throw new ApiError(500, "Failed to upload user image");
        }
        console.log("THis is user vitra ko url",userImageUrl.url)

      const user =  await User.findOne({_id:userId});
      console.log("this is user",user);
      
      user.profilePicture = userImageUrl.url;
      await user.save();
      res.status(200).json(new ApiResponse(200,user,"User profile updated"));
        } catch (error) {
          throw new ApiError(500,"Something went wrong",error.message);
        }
 })

 
const updateUser = asyncHandler(async(req,res) =>{
   try {
    // Extract user ID from the token
    const userId = req.user?._id;
    console.log("this is userId" , userId);



     // Extract data from the request body
     const{name,phoneNumber,bio,address}= req.body; //phonenumber how change 
     
console.log("this is",req.body);
     
     const updatedUser = await User.findByIdAndUpdate(userId,{name,phoneNumber,bio,address},
      { new: true, runValidators: true }) // Return updated user, validate input
     if(!updatedUser){
      throw new ApiError(404,"User not found");
     }
     res.status(200).json(new ApiResponse(200,updatedUser,"Profile Updated Successfully"))
   } catch (error) {
            throw new ApiError(500,"Error in updating profile",error.message);
   }
})

//delete user
const deleteUser = asyncHandler(async(req, res) => {
   try {
     const userId = req.params.id;
 
     const deletedUser = await User.findByIdAndDelete(userId);
     if (!deletedUser) {
       throw new ApiError(404, "User not found");
     }
     {
       res
         .status(200)
         .json(new ApiResponse(200, deletedUser, "User deleted successfully"));
       console.log("Deleted Successfully");
     }
   } catch (error) {
     console.error("Error deleting product:", error.message);
     throw new ApiError(500, error.message || "Error deleting product");
   }
 });
 
 export { getUser,getUserById, updateUser, deleteUser,updateUserProfile };