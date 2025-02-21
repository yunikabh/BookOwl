import { Router } from "express";
import { register, login,logout, verifyOtp,resendOtp } from "../controllers/auth.controller.js";

const router = Router();

router.route("/register").post(register)
router.route("/login").post( login )
router.route("/logout").post(logout);
router.route('/verifyOtp').post(verifyOtp)
router.route('/resendOtp').post(resendOtp)



export default router;