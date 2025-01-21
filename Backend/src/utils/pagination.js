import { ApiError } from "./apiError.js";

const pagination = async(query,page,limit) =>{

    const total = await query.countDocuments();
   const totalPages = Math.ceil(total/limit);
    //Add pagination to the query
    const results = await clonedQuery
                    .skip((page-1) * limit)
                    .limit(limit);
//crteated wise 

    return {
        totalItems: total,
        totalPages:totalPages,
        currentPage:page,
        results:results
    }
}

export {pagination};