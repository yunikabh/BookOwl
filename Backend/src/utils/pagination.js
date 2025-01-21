import { ApiError } from "./apiError.js";
import MongooseClient from "mongoose"
import ObjectId from "mongoose"
import Review from "../models/review.model.js";

const pagination = async(query,page,limit) =>{
    try {
        
        const data = await query.find()
        .skip((page-1) * limit)
                .limit(limit)
                .toArray();
                console.log("THis is data",data);

const totalData = await Review.countDocuments();
const totalPages = Math.ceil(totalData/limit);

//crteated wise 

return {
    totalItems: total,
    totalPages:totalPages,
    currentPage:page,
    results:data

}
    } catch (error) {
        throw new ApiError(500,"Something went wrong during pagination",error.message);
        
    }
}

export {pagination};