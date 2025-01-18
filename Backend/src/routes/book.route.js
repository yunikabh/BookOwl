import { Router } from "express";
import { addBook,getBooks,getBookById,updateBooks,deleteBooks } from "../controllers/book.controller.js";
import { verifyUser } from "../middlewares/auth.middleware.js";
import upload from "../middlewares/multer.middleware.js";
import multer from "multer";
import { addReviewAndRating, deleteReviewAndRating, updateReviewAndRating } from "../controllers/review.controller.js";
const router = Router();

router.route("/addBook").post( verifyUser,upload.single('coverImage'),addBook)
router.route("/getBooks").get(getBooks)
router.route("/getBookById/:id").get(verifyUser,getBookById)
router.route("/updateBook/:id").put(verifyUser,upload.single('coverImage'),updateBooks)
router.route("/deleteBook/:id").delete(verifyUser,deleteBooks)

//Review and rating section 
router.route("/addReviewAndRating").post(verifyUser,addReviewAndRating);
router.route("/updateReviewAndRating/:reviewId").put(verifyUser,updateReviewAndRating)
router.route("/deleteReviewAndRating/:reviewId").delete(verifyUser,deleteReviewAndRating)


export default router;