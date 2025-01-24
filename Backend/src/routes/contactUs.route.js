
import { Router } from "express";
import { verifyUser } from "../middlewares/auth.middleware.js";
import { contactUs,getContact } from "../controllers/contactUs.controller.js";

const router = Router();

router.route("/contactUs").post(verifyUser,contactUs)
router.route("/getContact").get(verifyUser,getContact)


export default router;