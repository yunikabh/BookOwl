const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", // Reference to the User model
        required: true,
      },
      items: [
        {
          product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Book", // Reference to the Book/Product model
            required: true,
          },
          quantity: {
            type: Number,
            required: true,
            default: 1,
          },
        },
      ],
      totalPrice: {
        type: Number,
        default: 0, // This can be computed dynamically
      },
      status: {
        type: String,
        enum: ["Active", "Saved", "Purchased"],
        default: "Active",
      },
    },
    { timestamps: true }
  );