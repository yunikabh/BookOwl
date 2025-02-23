import axios from "axios"
import asyncHandler from "../utils/asyncHandler.js"
import Payment from "../models/payment.model.js"
import jwt from "jsonwebtoken";
import Order from "../models/order.model.js"
import { ApiError } from "../utils/apiError.js"
import ApiResponse from "../utils/apiResponse.js"
import User from "../models/user.model.js";
import { initializeKhaltiPayment,verifyKhaltiPayment } from "../utils/khalti.js"


export const initiateKhaltiPayment = asyncHandler(async (req, res) => {
    try {
      console.log("Request Headers:", req.headers);

      console.log("Authorization Header:", req.header("Authorization"));

      const authHeader = req.header("Authorization")?.replace("Bearer ","");
      console.log("this is auth",authHeader)
       

         
        
        
        const { orderId } = req.params;
        const order = await Order.findById(orderId);
        if (!order) {
          throw new ApiError(404, "Order not found.")

        }
        console.log("This is order",order);

        if (order.paymentMethod === "Khalti") {
            const amountInPaisa = order.totalPrice * 100;
            
            const paymentInitiate = await initializeKhaltiPayment({
              userId:order.userId,
                amount: amountInPaisa,
                purchased_order_id: order._id,
                purchased_order_name: "Book Purchase",
                return_url: `${process.env.BACKEND_URI}`,
                website_url: `${process.env.BACKEND_URI}`,
            });
            
            const payment = await Payment.create({
                transactionId: paymentInitiate.pidx || new mongoose.Types.ObjectId().toString(),
                pidx: paymentInitiate.pidx,
                orderId: order._id,
                userId: order.userId,
                amount: amountInPaisa,
                paymentGateway: "Khalti",
                status: "Pending",
            });
            
            res.status(201).json(new ApiResponse(201, {
                payment_url: paymentInitiate.payment_url,
                pidx: paymentInitiate.pidx,
                orderId: order._id,
                userId:order.userId,
                payment
            }, "Khalti payment initiated successfully."));
        } else if (order.paymentMethod === "Cash on Delivery") {
            await Payment.create({
                transactionId: new mongoose.Types.ObjectId().toString(),
                pidx: null,
                orderId: order._id,
                amount: order.totalPrice,
                paymentGateway: "Cash on Delivery",
                status: "Pending",
            });

            return res.status(200).json(new ApiResponse(200, {
                orderId: order._id,
            }, "Order placed successfully with Cash on Delivery"));
        } else {
            return res.status(400).json(new ApiResponse(400, null, "Invalid payment method"));
        }
    } catch (error) {
        console.error("Khalti Payment Initiation Error:", error);
        throw new ApiError(500, "Internal server error");
    }
});




 export const verifyKhaltiPaymentController = asyncHandler(async (req, res) => {

  const { pidx, transaction_id, amount, purchase_order_id } = req.query;
    
    try {
        const paymentInfo = await verifyKhaltiPayment(pidx);
        const amountInNPR = Number(paymentInfo.total_amount) / 100;

        if (
            paymentInfo?.status !== "Completed" ||
            paymentInfo.transaction_id !== transaction_id ||
            amountInNPR !== Number(amount) / 100
        ) {
            return res.status(400).json(new ApiResponse(400, paymentInfo, "Incomplete or invalid payment information"));
        }

        const order = await Order.findById(purchase_order_id);
        if (!order) {
            return res.status(400).json(new ApiResponse(400, null, "Order not found"));
        }
        
        await Order.findByIdAndUpdate(purchase_order_id, { $set: { status: "Completed" } });
      





        const paymentData = await Payment.create({
            pidx,
            transactionId: transaction_id,
            orderId: purchase_order_id,
            amount: amountInNPR,
            dataFromVerificationReq: paymentInfo,
            apiQueryFromUser: req.query,
            paymentGateway: "Khalti",
            status: "Success",
        });

        res.status(200).json(new ApiResponse(200, paymentData, "Payment verified and order completed successfully"));
    } catch (error) {
        throw new ApiError(500, "Error occurred during payment verification", error.message);
    }
});

