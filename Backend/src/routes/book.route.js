import { Router } from "express";
import { addBook,getBooks,getBookById,updateBooks,deleteBooks } from "../controllers/book.controller.js";
import { verifyUser } from "../middlewares/auth.middleware.js";

const router = Router();


router.route("/addBook").post(addBook)
router.route("/getBooks").get(getBooks)
router.route("/getBookById/:id").get(verifyUser,getBookById)
router.route("/updateBook/:id",verifyUser).put(updateBooks)
router.route("/deleteBook/:id",verifyUser).delete(deleteBooks)

export default router;