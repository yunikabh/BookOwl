import express from "express";
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import asyncHandler from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import ApiResponse from "../utils/apiResponse.js";
import bcrypt from "bcrypt";
import { sendOtpEmail } from "../utils/sendOtp.js";
//routes are called controller
const router = express.Router();

// Helper function to generate OTP
const generateOtp = () => Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit OTP

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
  // Generate OTP (6-digit)
  const generateOtp = () => Math.floor(100000 + Math.random() * 900000).toString();
  const otp = generateOtp();
  const otpExpires = new Date(Date.now() + 5 * 60 * 1000);
  
  try {
    const savedUser = await User.create({
      name: name,
      email: email,
      password: hashedPassword,
      phoneNumber: phoneNumber,
      otp,
      otpExpires,
  });
   // Send OTP email
   await sendOtpEmail(email, otp);

  savedUser.password = undefined;
    return res.json(new ApiResponse(200, {savedUser,userId: savedUser._id, email }, "Registered successfully "))
  } catch (error) {
    console.log(error.message);
    await User.deleteOne({ email });
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
      return res.status(409).send({ message: "Invalid credentials" });
    }
    //check password
    const plainPassword = password;
    const hashedPassword = user.password;

    console.log(plainPassword, hashedPassword);

    const matchPassword = await bcrypt.compare(plainPassword, hashedPassword);
    if (!matchPassword) {
      return res.status(409).send({ message: "Invalid credentials" });
      // throw new ApiError(409, "Invalid credentials");
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
      .cookie("role",  user.role.trim(), options) // Set role in a cookie
      .json(new ApiResponse(200, {user:loggedInUser,accessToken,refreshToken},"User logged in  successful"));
  }
   catch (error) {
    throw new ApiError(500, "Error during login",error.message);
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
        .cookie("role", user.role.trim(), options) 
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
    .clearCookie("refreshToken",options)
    .clearCookie("role", options)
    .json(new ApiResponse(200,userId,"User logged out successfully."))
  }
  catch(error){
    console.error('Error verifying token:', error);
    throw new ApiError(400,"Invalid Token.")
  }
 });

 const verifyOtp = asyncHandler(async(req,res) =>{
    const{email,otp} = req.body;
    const user = await User.findOne({ email });
  if (!user) {
    throw new ApiError(404, "User not found");
  }

  if (user.isVerified) {
    return res.json(new ApiResponse(200, null, "Email already verified."));
  }

  // Check OTP & expiration
  if (!user.otp || user.otp !== otp || new Date() > user.otpExpires) {
    throw new ApiError(400, "Invalid or expired OTP.");
  }

  // Mark user as verified
  user.isVerified = true;
  user.otp = null;
  user.otpExpires = null;
  await user.save();

  return res.json(new ApiResponse(200, null, "Email verified successfully."));

 })

 const resendOtp = asyncHandler(async (req, res) => {
  const { email } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    throw new ApiError(404, "User not found");
  }

  if (user.isVerified) {
    return res.json(new ApiResponse(200, null, "Email already verified. No need to resend OTP."));
  }

  // Generate new OTP
  const newOtp = generateOtp();
  const otpExpires = new Date(Date.now() + 10 * 60 * 1000); // New OTP expires in 10 minutes

  user.otp = newOtp;
  user.otpExpires = otpExpires;
  await user.save();

  // Send new OTP to email
  await sendOtpEmail(email, newOtp);

  return res.json(new ApiResponse(200, newOtp, "New OTP sent to your email."));
});

export { register, login,logout,verifyOtp,resendOtp};
