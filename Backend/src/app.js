import express from 'express';
import cors from 'cors'
import cookieParser from "cookie-parser"
import errorHandler from './middlewares/errorHandler.middleware.js';
import authRoutes from "./routes/auth.route.js"
import bookRoutes from "./routes/book.route.js"
import userRoutes from "./routes/user.route.js"

const app = express();
app.use(cors({
    origin: "http://localhost:3000", // Replace with your frontend URL
    credentials: true, // Allow cookies to be sent
  }));
  
app.use(express.json());
app.use(cookieParser());
app.use("/",(req, res)=>{
  res.json({message:"Welcome to the Backend Server - Yunika"})
})
app.use('/auth', authRoutes)
app.use('/book',bookRoutes)
app.use('/userProfile',userRoutes)


app.use(errorHandler)
export default app;