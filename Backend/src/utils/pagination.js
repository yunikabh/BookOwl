import { ApiError } from "./apiError.js";
import MongooseClient from "mongoose"
import ObjectId from "mongoose"
import Review from "../models/review.model.js";

const pagination = async (query, page, limit) => {
    try {
      const data = await query
      .sort({ createdAt: -1 }) // Sort by createdAt in descending order
        .skip((page - 1) * limit)
        .limit(limit);
  
      // Count documents based on query conditions
      const totalData = await Review.countDocuments(query._conditions || {});
  
      const totalPages = Math.ceil(totalData / limit);
  
      return {
        totalItems: totalData,
        totalPages,
        currentPage: page,
        results: data,
      };
    } catch (error) {
      throw new ApiError(500, "Something went wrong during pagination", error.message);
    }
  };
  
  export {pagination}