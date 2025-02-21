import nodemailer from "nodemailer"
import 'dotenv/config';
import asyncHandler from "./asyncHandler.js";
import { ApiError } from "./apiError.js";


const transporter = nodemailer.createTransport({
            service :"gmail",
            auth:{
                user:process.env.EMAIL_USER,
                pass:process.env.EMAIL_PASS,
            },
})
// Function to send OTP email
 
export const sendOtpEmail = async(email,otp) =>{
    const mailOptions = {
        from:process.env.EMAIL_USER,
        to:email,
        subject:"Your OTP Code for Email Verification",
        text:`Your OTP code is: ${otp}. It will expire in 2 minutes.`
    }
    try{
        await transporter.sendMail(mailOptions);
        console.log("OTP sent successfully.");

    }catch(error){
        console.log("Error sending OTP:",error);
        throw new ApiError(404,"Could not send OTP. Please try again.")
    }
};