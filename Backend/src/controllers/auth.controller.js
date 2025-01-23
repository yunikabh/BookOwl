import express from "express";
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import asyncHandler from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import ApiResponse from "../utils/apiResponse.js";
// const bcrypt= require('bcrypt');?
import bcrypt from "bcrypt";
//routes are called controller
const router = express.Router();

export const generateAccessAndRefreshTokens = async(userId) =>{
  try{
    const user = await User.findById(userId)

    const accessToken = user.generateAccessToken();
    console.log("this is access",accessToken);

    const refreshToken = user.generateRefreshToken();
    console.log("this is refresh",refreshToken)

        // Save the refresh token in the database
        user.refreshToken = refreshToken;
        await user.save({ validateBeforeSave: false });
        console.log("Database", user)


    return{accessToken,refreshToken};
  } catch(error){
    throw new ApiError(500,"Something went wrong while generating access token and refresh token.");
  }
  }

//Register User

const register = asyncHandler(async (req, res,next) => {
  //   console.log("eta", req.body);
  //extract new user data from req.body
  const { name, email, password, phoneNumber } = req.body;

  //check uniqueness of email
  const user = await User.findOne({ email });
  if (user) {
    throw new ApiError(409, "Email already exists");
  }

  //hash password before inserting into database
  const plainPassword = password;
  const saltRound = 10; // 1 to 32
  const hashedPassword = await bcrypt.hash(plainPassword, saltRound);
  try {
    const savedUser = await User.create({
      name: name,
      email: email,
      password: hashedPassword,
      phoneNumber: phoneNumber,
  });

  savedUser.password = undefined;
    return res.json(new ApiResponse(200, savedUser, "Registered successfully "))
  } catch (error) {
    console.log(error.message);
    // return next(new ApiError(409, "Unsuccessful Registration"));

    throw new ApiError(409, "Unsuccessful Registration");
};
});
  
//Login User

const login = asyncHandler(async (req, res) => {
  try {
    const {email, password } = req.body;

    console.log(req.body);
    if (
      [email, password].some((field) => {
        field.trim() === "";
      })
    ) {
      throw new ApiError(404, "All fields are required");
    }

    const user = await User.findOne({ email });
      console.log("logged in user: ",user);
    if (!user) {
      throw new ApiError(409, "Invalid credentials");
    }
    //check password
    const plainPassword = password;
    const hashedPassword = user.password;

    console.log(plainPassword, hashedPassword);

    const matchPassword = await bcrypt.compare(plainPassword, hashedPassword);
    if (!matchPassword) {
      // return res.status(409).send({ message: "Invalid credentials" });
      throw new ApiError(409, "Invalid credentials");
    }


    const {accessToken,refreshToken} = await generateAccessAndRefreshTokens(user._id)
      const loggedInUser = await User.findById(user._id).
      select("-password -refreshToken")
    
    const options = {
      httpOnly: true,//Makes the cookie inaccessible to client-side JavaScript
      secure: true,// Ensures the cookie is only sent over secure HTTPS connections
    };
    //Authentication successful
    res
      .status(200) //for browser
      .cookie("accessToken", accessToken, options)
      .cookie("refreshToken",refreshToken,options)// Adds a cookie named "accessToken" containing the JWT, using the options defined earlier.
      .cookie("role", user.role, options) // Set role in a cookie
      .json(new ApiResponse(200, {user:loggedInUser,accessToken,refreshToken},"User logged in  successful"));
  }
   catch (error) {
    console.log("Error during login:", error.message);
    throw new ApiError(500, "Error during login");
  }

 const refreshAccessToken = asyncHandler(async (req, res) => {
    const incomingRefreshToken = req.cookies.refreshToken || req.body.refreshToken

    if (!incomingRefreshToken) {
        throw new ApiError(401, "unauthorized request")
    }

    try {
        const decodedToken = jwt.verify(
            incomingRefreshToken,
            process.env.REFRESH_TOKEN_SECRET
        )
    
        const user = await User.findById(decodedToken?._id)
    
        if (!user) {
            throw new ApiError(401, "Invalid refresh token")
        }
    
        if (incomingRefreshToken !== user?.refreshToken) {
            throw new ApiError(401, "Refresh token is expired or used")
            
        }
    
        const options = {
            httpOnly: true,
            secure: true
        }
    
        const {accessToken, newRefreshToken} = await generateAccessAndRefreshTokens(user._id)
    
        return res
        .status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", newRefreshToken, options)
        .json(
            new ApiResponse(
                200, 
                {accessToken, refreshToken: newRefreshToken},
                "Access token refreshed"
            )
        )
    } catch (error) {
        throw new ApiError(401, error?.message || "Invalid refresh token")
    }

})



});


//Logout route 
 const logout = asyncHandler(async(req,res)=>{
  // Get tokens from cookies
  const accessToken = req.cookies.accessToken;
  const refreshToken = req.cookies.refreshToken;

  // Check if both tokens exist
  if (!accessToken || !refreshToken) {
    throw new ApiError(404, "No tokens provided. Already logged out.");
  }

  try{
    const decodedToken = jwt.verify(accessToken,process.env.ACCESS_TOKEN_SECRET);
    
    console.log("dt: ",decodedToken);
    const userId = await User.findById(decodedToken.data.id).select("-password -refreshToken")
    console.log(`User with ID ${userId} has logged out`);
    
    const options = {
      httpOnly: true,//Makes the cookie inaccessible to client-side JavaScript
      secure: true,// Ensures the cookie is only sent over secure HTTPS connections
    };

   
    res.status(200)
    .clearCookie("accessToken",options)
    .clearCookie("refreshToken",options).json(new ApiResponse(200,userId,"User logged out successfully."))
  }
  catch(error){
    console.error('Error verifying token:', error);
    throw new ApiError(400,"Invalid Token.")
  }
 });
export { register, login,logout };
