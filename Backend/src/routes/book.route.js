import { Router } from "express";
import { addBook,getBooks,getBookById,updateBooks,deleteBooks, newArrivalBooks,dealsOfTheWeek,getBooksStats} from "../controllers/book.controller.js";
import { verifyUser } from "../middlewares/auth.middleware.js";
import upload from "../middlewares/multer.middleware.js";
import { addReviewAndRating, deleteReviewAndRating, updateReviewAndRating, getReviewsAndRating,getReviewByUserId} from "../controllers/review.controller.js";
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
router.route("/getReviewsAndRating/:bookId").get(verifyUser,getReviewsAndRating);
router.route('/getReviewByUserId/:userId').get(verifyUser,getReviewByUserId)

//Filter by
router.route("/newArrivalsBook").get(verifyUser,newArrivalBooks);
router.route("/dealsOfTheWeek").get(verifyUser,dealsOfTheWeek);
router.route("/getBooksStats").get(verifyUser,getBooksStats);

export default router;