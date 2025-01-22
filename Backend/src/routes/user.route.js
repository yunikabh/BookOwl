import { Router } from "express";
import { getUser, getUserById,updateUser,deleteUser ,updateUserProfile} from "../controllers/user.controller.js";
import { verifyUser } from "../middlewares/auth.middleware.js";
import upload from "../middlewares/multer.middleware.js";
// import { register, login,addBook,getBooks,getBookById,updateBooks,deleteBooks } from "../controllers/user.controller.js";

const router = Router();
router.route("/getUsers").get(getUser);
router.route("/getUserById/:id").get(getUserById);
router.route("/updateUser/:id").put(verifyUser,updateUser);
router.route("/deleteUser/:id").delete(deleteUser);

router.route("/updateUserProfile/:id").put(verifyUser,upload.single("userImage"),updateUserProfile);

export default router;