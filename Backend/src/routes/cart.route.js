import { Router } from "express";
// import { addBook,getBooks,getBookById,updateBooks,deleteBooks } from "../controllers/book.controller.js";
import { verifyUser } from "../middlewares/auth.middleware.js";
import addToCart from "../controllers/cart.controller.js";

const router = Router();

router.route('/addToCart').post(verifyUser,addToCart);





export default router;

