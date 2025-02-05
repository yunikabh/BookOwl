import mongoose from "mongoose";

const cartSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Reference to the User model
      required: true,
      index:true
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
          default: 1,
        },
        price: {
          type: Number, // Store book price directly from the Book model
          required: true,
        },
      },
    ],
    totalPrice: {
      type: Number,
      default: 0, // This can be computed dynamically
    },
    // status: {
    //   type: String,
    //   enum: ["Active", "Saved", "Purchased"],
    //   default: "Active",
    // },
  },
  { timestamps: true }
);

cartSchema.index({userId:1,unique:true});

const Cart = mongoose.model("Cart", cartSchema);

export default Cart;
