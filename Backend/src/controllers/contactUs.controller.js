import express from "express";
import asyncHandler from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import ApiResponse from "../utils/apiResponse.js";
import  Contact  from "../models/contactUs.model.js";
import User from "../models/user.model.js";
import { verifyUser } from "../middlewares/auth.middleware.js";

//add contact us 
const contactUs = asyncHandler(async(req,res) =>{

    
    
    try {
              const name= req.user.name;
              const email= req.user.email;
              console.log("THis is ",name);
              console.log("THis is ",email);

              const userId = req.user._id;
              console.log("This is useraid",userId);
          
                  const {userName,userEmail,subject, message} = req.body;
                  console.log(userName);
                  console.log(userEmail)
                  
                  if (!userName || !userEmail || !subject || !message) {
                      throw new ApiError(400, "All fields  are required.");
                    }
              const userDetails = await User.findOne({name:userName,email:userEmail});
              console.log("THis is user",userDetails)
              if(!userDetails){
                throw new ApiError (400,"User not found. Please use your own  registered name and email.")
              }
            
              const contact = await  Contact.create({
            user:userDetails._id,
            name,
            email,
            subject,
            message
          });
      
          res.status(201).json(new ApiResponse(200,contact,"Your Message has been sent successfully!"));

    } catch (error) {
        throw new ApiError(400,"Something went wrong ",error.message);
    }

})

//Get the contact us details 

const getContact =asyncHandler(async(req,res)=>{
            
            try {
                    const getDetails = await Contact.find()
                    .populate("user","name email")
                    .sort({ createdAt: -1 }) // Sort by most recent queries

                    const totalQueries = await Contact.countDocuments();

                    res.status(200).json(new ApiResponse(200,{getDetails,totalQueries},"All the data is retrived"));
                            } catch (error) {
                throw new ApiError(400,"Something went wrong")
            }
})


export {contactUs,getContact};