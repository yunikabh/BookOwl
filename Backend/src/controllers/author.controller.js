import express from "express";

import asyncHandler from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import ApiResponse from "../utils/apiResponse.js";
import authorModel from "../models/author.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

const router = express.Router();

//add author
const addAuthor = asyncHandler(async(req,res,next) =>{
    const {name,bio,moreBooks} = req.body;
    const authorImage = req.file;
    const authorImageLocalPath = authorImage ? authorImage.path : null;
        console.log(authorImage);
        if(!authorImageLocalPath){
                    throw new ApiError(400,"Author image is required");

        }

      const authorImageUrl=await  uploadOnCloudinary(authorImageLocalPath);
      console.log("This is author image url",authorImageUrl);

      if(!authorImageUrl || !authorImageUrl.url){
        throw new ApiError(500, "Failed to upload author image");
      }
      console.log("THis is author vitra ko url",authorImageUrl.url)


        const existingAuthor = await authorModel.findOne({authorName:name});
        if(existingAuthor){
            // return next(new ApiError(400, "This author already exists"));

            throw new ApiError(500,"This author already exists");
        }

        const author= new authorModel({authorName:name,authorImage:authorImageUrl.url,authorBio:bio,moreBooks});
         
        const savedAuthor = await author.save();

        res.status(201).json(new ApiResponse(201,savedAuthor,"Author is added successfully"));
});

//getAuthor
const getAuthor = asyncHandler(async(req,res)=>{
    try {
        const allAuthorDetail = await authorModel.find();
        if(allAuthorDetail.length === 0){ 
            throw new ApiError(404,"Authors  not found")
    
        }
        res.status(200).json(new ApiResponse(200,allAuthorDetail,"All authors details retrived successfully."));
       
    } catch (error) {
        throw new ApiError(404,"Problem in fetching author details",error.message);
    }
    })

    export {
        addAuthor,
        getAuthor
    }

