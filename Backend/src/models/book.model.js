import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    // Basic Book Details
   bookName: {
     type: String,
     required: true
     },
     
     bookSummary: {
         type: String,
         required: true
       },
       price:{
         type:Number,
         required: true
       },
       pages: {
         type: Number,
         required: true
       },
       publishedDate: {
         type: Date,
         required: true
       },
       genre: {
         type:  [String],
         required: true
       },
       rating: {
          type: Number, default: 0 
         }, // Average user rating (1-5 scale)
 
       coverImage: {
            type: String 
           }, // URL or path of the book cover image
 
       ISBN: {
         type: String,
         required: true,
         unique: true // ISBN should be unique
       },
       language: {
         type: String,
         required: true
       },
       publisher: {
         type: String,
         required: true
       },
       mood: {
         type:  [String], // Could be "Happy", "Sad", "Exciting", etc.
         required: true
       },
       customTags: {
         type: [String], // Array of strings for custom tags
         default: []
       },
 
 
       //author information 
       author: {
         name: {
           type: String,
           required: true
         },
         bio: {
           type: String,
           required: true
         },
         moreBooks: {
           type: [String], // List of book titles or identifiers by the author
           default: []
         }
       },
    //  //review section 
    //  reviews: {
    //      userId: { 
    //        type: mongoose.Schema.Types.ObjectId, 
    //        ref: 'User' 
    //      }, // Reference to the user who wrote the review
    //      comment: { 
    //        type: String 
    //      }, // Review text
    //      rating: {
    //         type: Number,
    //          required: true 
    //        }, // Individual rating for the book
    //      createdAt: { 
    //        type: Date, default: Date.now
    //       }// Timestamp of the review
    //    },
     stock: { 
       type: Number, 
       default: 0 
     }, // Number of copies available
     createdAt: { 
       type: Date, 
       default: Date.now
      },
     }) // Timestamp when the book was added{ timestamps: true }); 
 //Creating a model/table
 
 const Book = new mongoose.model("Book",bookSchema);
 
 export default Book;
 