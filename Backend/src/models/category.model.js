import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    categoryIcon:{
        type: String,
        required:false
    },
    categoryName:{
        type:String,
         required: [true, 'Category name is required'],
         unique: true,  // Optional: Ensures no duplicate category names
    },
    description: {
        type: String,
        required: false
    }
})

const Category = mongoose.model("Category",categorySchema);

export default Category;