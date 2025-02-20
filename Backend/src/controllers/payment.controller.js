import axios from "axios"
import asyncHandler from "../utils/asyncHandler.js"
import Payment from "../models/payment.model.js"
import Order from "../models/order.model.js"
import { ApiError } from "../utils/apiError.js"
import ApiResponse from "../utils/apiResponse.js"
import { initializeKhaltiPayment,verifyKhaltiPayment } from "../utils/khalti.js"


export const initiateKhaltiPayment = asyncHandler(async (req, res) => {
    try {
      const { orderId } = req.params;
  
      // Find the order
      const order = await Order.findById(orderId);
      if (!order) throw new ApiError(404, "Order not found.");
      
      // Check if the order payment method is Khalti
      if (order.paymentMethod === "Khalti") {
      
        const amountInPaisa = order.totalPrice * 100;
      // Initialize Khalti Payment
      const paymentInitiate = await initializeKhaltiPayment({
        amount: amountInPaisa,  // Multiply here only once
        purchased_order_id: order._id,
        purchased_order_name: "Book Purchase",
        return_url: "http://localhost:3000/payment/verifyKhaltiPaymentController",
        website_url: "http://localhost:3000",
      });
  
      // Save Payment Record in Database
      const payment = await Payment.create({
        transactionId: null,
        pidx: paymentInitiate.pidx,
        orderId: order._id,
        amount: amountInPaisa,
        paymentGateway: "Khalti",
        status: "Pending",
      });
  
      res.status(201).json(new ApiResponse(201, {
        payment_url: paymentInitiate.payment_url,
        pidx: paymentInitiate.pidx,
        orderId: order._id,
      }, "Khalti payment initiated successfully."));
    }
    // If Payment Method is Cash on Delivery (COD), Just Confirm Order
  else if(order.paymentMethod === "Cash on Delivery") {
    await Payment.create({
      transactionId: null,
      pidx: null,
      productId: order._id,
      amount: order.totalPrice,
      paymentGateway: "Cash on Delivery",
      status: "Pending",
      apiQueryFromUser: { userId, shippingAddress },
    });


    return res.status(200).json({
      success: true,
      message: "Order placed successfully with Cash on Delivery",
      orderId: order._id,
    })
} 
else {
    return res.status(400).json(new ApiResponse(400, null, "Invalid payment method"));
}
}
catch (error) {
      console.error("Khalti Payment Initiation Error:", error);
      throw new ApiError(500, "Internal server error");
    }
  });




 export const verifyKhaltiPaymentController = asyncHandler(async (req, res) => {

    const {
        pidx,
        txnId,
        amount,
        mobile,
        purchase_order_id,
        purchase_order_name,
        transaction_id,
      } = req.query;
    
      try {
        const paymentInfo = await verifyKhaltiPayment(pidx);
        const amountInNPR = Number(paymentInfo.total_amount) / 100;
        // Check if payment is completed and details match
        if (
          paymentInfo?.status !== "Completed" ||
          paymentInfo.transaction_id !== transaction_id ||
          amountInNPR !== Number(amount) / 100  // Convert `amount` to NPR for comparison
        ) {
          res.status(400).json(new ApiResponse(400,paymentInfo,"Incomplete information"))
        }
    
        // Check if payment done in valid item
        const purchasedItemData = await Order.find({
          _id: purchase_order_id,
          totalPrice:amountInNPR ,
        });
    
        if (!purchasedItemData) {
          return res.status(400).send({
            success: false,
            message: "Purchased data not found",
          });
        }
        // updating purchase record 
        await Order.findByIdAndUpdate(
          purchase_order_id,
    
          {
            $set: {
              status: "completed",
            },
          }
        );
    
        // Create a new payment record
        const paymentData = await Payment.create({
          pidx,
          transactionId: transaction_id,
          productId: purchase_order_id,
          amount:amountInNPR,
          dataFromVerificationReq: paymentInfo,
          apiQueryFromUser: req.query,
          paymentGateway: "khalti",
          status: "success",
        });
    
        // Send success response
        res.status(200).json(new ApiResponse(200,paymentData,"Payment Successful"))
          }
           catch (error) {
       
       throw new ApiError(404,"Error occured",error.message);
      }



});

