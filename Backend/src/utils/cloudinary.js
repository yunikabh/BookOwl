import {v2 as cloudinary} from "cloudinary"
import fs, { unlink } from "fs";
import 'dotenv/config';
import { ApiError } from "./apiError.js";
import { response } from "express";



cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});


const uploadOnCloudinary = async(localFilePath) =>{
    console.log(uploadOnCloudinary);
    try {
        if(!localFilePath){
            throw new ApiError(400,"File path not found");
        }
        const response = await cloudinary.uploader.upload(localFilePath
            ,{resource_type:"auto",folder: 'BookOwl'});
       // If file has been uploaded successfully
            console.log("File is uploaded on cloudinary",response.url);
            return response;
}
catch (error) {
            fs.unlinkSync(localFilePath)//remove the locally saved temporary file as the upload operation failed 
            throw new ApiError(500,"locally saved temporary file as the upload operation failed ");
    }
}


export {uploadOnCloudinary};