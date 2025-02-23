import mongoose from "mongoose";

const completedPaymentSchema = new mongoose.Schema(
    {
        transactionId: { type: String, required: true, unique: true },
        pidx: { type: String, required: true },
        orderId: { type: mongoose.Schema.Types.ObjectId, ref: "Order", required: true },
        userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Track which user made the payment
        amount: { type: Number, required: true },
        paymentGateway: { type: String, default: "Khalti" },
        status: { type: String, default: "Completed" },
        dataFromVerificationReq: { type: Object }, // Store extra verification response data
        timestamp: { type: Date, default: Date.now },
    },
    { timestamps: true }
);

export default mongoose.model("CompletedPayment", completedPaymentSchema);
