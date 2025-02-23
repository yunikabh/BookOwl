import mongoose from "mongoose";


const paymentSchema = new mongoose.Schema(
  {
    transactionId: { type: String, unique: true, sparse: true },

    pidx: {
         type: String,
          unique: true 
        },
    orderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
      required: true,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: false, // Track which user made the payment
      },
    amount: { 
        type: Number, 
        required: true 
    },
    dataFromVerificationReq: { 
        type: Object
     },
     apiQueryFromUser: {
         type: Object
         },
    paymentGateway: {
      type: String,
      enum: ["Khalti","Cash on delivery"],
      required: true,
    },
    status: {
      type: String,
      enum: ["Pending","Completed" , "Failed"],
      default: "Pending",
    },
    paymentDate: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const Payment = mongoose.model("Payment", paymentSchema);

export default Payment;



