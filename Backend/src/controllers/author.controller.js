import express from "express";

import asyncHandler from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import ApiResponse from "../utils/apiResponse.js";
import authorModel from "../models/author.model.js";

const router = express.Router();

//add author
const addAuthor = asyncHandler(async(req,res,next) =>{
    const {name,bio,moreBooks} = req.body;
    // const authorImageUrl = `${req.protocol}://${req.get('host')}/public/temp/${req.file.filename}`;


    const authorImageUrl = req.file ? req.file.path : null;


        const existingAuthor = await authorModel.findOne({authorName:name});
        if(existingAuthor){
            // return next(new ApiError(400, "This author already exists"));

            throw new ApiError(500,"This author already exists");
        }

        const author= new authorModel({authorName:name,authorImage:authorImageUrl,authorBio:bio,moreBooks});
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

