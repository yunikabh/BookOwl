import { Router } from "express";
import { addBook,getBooks,getBookById,updateBooks,deleteBooks } from "../controllers/book.controller.js";
import { verifyUser } from "../middlewares/auth.middleware.js";

const router = Router();


router.route("/addBook").post( verifyUser, addBook)
router.route("/getBooks").get(getBooks)
router.route("/getBookById/:id").get(verifyUser,getBookById)
router.route("/updateBook/:id").put(verifyUser,updateBooks)
router.route("/deleteBook/:id").delete(verifyUser,deleteBooks)

export default router;