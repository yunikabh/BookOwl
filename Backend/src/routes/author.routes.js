import {Router} from "express"

import { verifyUser } from "../middlewares/auth.middleware.js"
import { addAuthor,getAuthor } from "../controllers/author.controller.js";
import upload from "../middlewares/multer.middleware.js";
import multer from "multer";
const router = Router();


router.route('/addAuthor').post(verifyUser,upload.single('authorImage'),addAuthor)
router.route('/getAuthor').get(verifyUser,getAuthor)

export default router;