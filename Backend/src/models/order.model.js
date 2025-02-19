import mongoose from "mongoose";



const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true, // Reference to the user who made the purchase
    },
    items: [
          {
            bookId: {
              type: mongoose.Schema.Types.ObjectId,
              ref: "Book", // Reference to the Book/Product model
              required: true,
            },
            quantity: {
              type: Number,
              required:true,
            },
            price: {
              type: Number, // Store book price directly from the Book model
              required: true,
            },
          },
        ],
     totalPrice: {
          type: Number,
          required:true, // This can be computed dynamically
        },
    paymentMethod: {
      type: String,
      enum: ["Khalti", "Cash on Delivery"],
      required: true, // Payment method used
    },
    paymentStatus: {
      type: String,
      enum: [ "Pending","Completed" , "Failed"],
      default: "Pending", // Status of the payment
    },
    purchaseDate: {
      type: Date,
      default: Date.now, // Date and time of the purchase
    },
    shippingAddress: {
      street: { type: String},
      city: { type: String },
      state: { type: String},
    },
    deliveryStatus: {
      type: String,
      enum: ["Pending","Processing", "Shipped","Cancelled"],
      default: "Pending", // Current status of delivery
    },
    customerDetails: {
      type: Object
      },
   
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);

export default Order;
