import mongoose from "mongoose";
import { ApiError } from "../utils/apiError.js";
import jwt from "jsonwebtoken"
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    maxlength: 30,
    required: true,
    trim: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  phoneNumber: {
    type: Number,
    required: true,
    minlength: 10,
  },
  isEmailVerified: {
    type: Boolean,
    default: false,
  },
  refreshToken: {
    type: String, // Store refresh token for authentication
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
  //Fields are optional
  profilePicture: {
    type: String, 
    default: ""// URL or file path to the profile picture
  },
  bio: {
    type: String,
    maxlength: 250, // User's short description
    default: "",
  },
  orders:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Order"
  }],
  address: {
    street: { type: String, default: "" },
    city: { type: String, default: "" },
    state: { type: String, default: "" },
  },
});

userSchema.methods.generateAccessToken = function () {
        try{
    const accessToken = jwt.sign(
    {
      data: {
        id: this._id,
        email:this.email,
        name:this.name,
        role:this.role

        //need to have role also
      },
    },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: "1h" }
  );
  return accessToken;
}catch(error){
    
    throw new ApiError(500,"Error",error)
}
};
userSchema.methods.generateRefreshToken = function () {
    try{
    const refreshToken = jwt.sign(
          {
            data: {
              id: this._id,
              email: this.email,
              name:this.name,
              role:this.role

    
            },
          },
          process.env.REFRESH_TOKEN_SECERT,
          { expiresIn: "1d" }
        );
        return refreshToken;
    }catch(error){
    throw new ApiError(500,"Error",error.message)
    }
};

//Creating a model/table

const User = new mongoose.model("User", userSchema);

export default User;
