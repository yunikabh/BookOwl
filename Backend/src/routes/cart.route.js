import { Router } from "express";
// import { addBook,getBooks,getBookById,updateBooks,deleteBooks } from "../controllers/book.controller.js";
import { verifyUser } from "../middlewares/auth.middleware.js";
import {addToCart,getCartDetails, updateCart,deleteCart ,removeFromCart} from "../controllers/cart.controller.js";

const router = Router();

router.route('/addToCart/:userId').post(verifyUser,addToCart);
router.route('/getCartDetails/:id').get(verifyUser,getCartDetails);
router.route('/updateCart/:id').put(verifyUser,updateCart);
router.route('/deleteCart/:id').put(verifyUser,deleteCart);
router.route('/removeFromCart/:id').put(verifyUser,removeFromCart)




export default router;

