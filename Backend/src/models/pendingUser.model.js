
import mongoose from "mongoose"

const pendingUserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  otp: { type: String, required: true },
  otpExpires: { type: Date, required: true },
  password: { type: String, required: true },  // Hashed password
  name: { type: String },  // Optional (only if needed for registration)
  phoneNumber: { type: String }  // Optional (only if required)
});

const PendingUser = mongoose.model("PendingUser", pendingUserSchema);

export default PendingUser;