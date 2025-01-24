import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    user:{
            type:mongoose.Types.ObjectId,
            ref:"User",
            required:true
    },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
    maxlength: 100,
  },
  message: { 
    type: String,
     required: true,
      maxlength: 500 
    },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const contactUs = mongoose.model("contactUs" , contactSchema)

export default contactUs;
