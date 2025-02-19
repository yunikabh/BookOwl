import express from 'express';
import cors from 'cors'
import cookieParser from "cookie-parser"
import authRoutes from "./routes/auth.route.js"
import bookRoutes from "./routes/book.route.js"
import userRoutes from "./routes/user.route.js"
import cartRoutes from "./routes/cart.route.js"
import categoryRoutes from "./routes/category.route.js"
import authorRoutes from "./routes/author.routes.js"
import contactUsRoutes from "./routes/contactUs.route.js"
import { ApiError } from './utils/apiError.js';
import errorHandler from './middlewares/errorHandler.middleware.js';
import upload from './middlewares/multer.middleware.js';
import orderRoutes from "./routes/order.routes.js"
import paymentRoutes from "./routes/payment.routes.js"

const app = express();
app.use(cors({
    origin: "http://localhost:3000", // Replace with your frontend URL
    credentials: true, // Allow cookies to be sent
  }));
  
app.use(express.json());
app.use(cookieParser());
app.get("/",(req, res)=>{
  res.json({message:"Welcome to the Backend Server - Yunika"})
})
app.use('/public', express.static('public'));

app.use('/auth', authRoutes)
app.use('/book',bookRoutes)
app.use('/userProfile',userRoutes)
app.use('/cart',cartRoutes)
app.use('/category',categoryRoutes)
app.use('/author',authorRoutes)
app.use('/contact',contactUsRoutes)
app.use('/order',orderRoutes)
app.use('/payment',paymentRoutes)

// app.use((err, req, res, next) => {
//   console.error(err.stack);  // Optional: Log the error stack for debugging

//   // If the error is an instance of ApiError
//   if (err instanceof ApiError) {
//     return res.status(err.statusCode).json({
//       success: err.success,
//       message: err.message,
//       errors: err.errors || [],
//       stack: process.env.NODE_ENV === 'development' ? err.stack : null,  // Show stack trace in development only
//     });
//   }

//   // For other unknown errors
//   res.status(500).json({
//     success: false,
//     message: 'Internal Server Error',
//   });
// });

app.use(errorHandler);

export default app;