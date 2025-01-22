import {Router} from "express"

import { verifyUser } from "../middlewares/auth.middleware.js"
import {addCategory,deleteCategory,getCategory, updateCategory} from "../controllers/category.controller.js";
import upload from "../middlewares/multer.middleware.js";

const router = Router();


router.route('/addCategory').post(verifyUser,upload.single("categoryIcon"),addCategory);
router.route('/getCategory').get(getCategory);
router.route('/updateCategory/:id').put(verifyUser,upload.single("categoryIcon"),updateCategory);
router.route('/deleteCategory/:id').delete(verifyUser,deleteCategory);



export default router;