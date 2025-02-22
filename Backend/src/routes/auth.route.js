import { Router } from "express";
import { register, login,logout, verifyOtp,resendOtp,forgotPassword,resetPassword } from "../controllers/auth.controller.js";

const router = Router();

router.route("/register").post(register)
router.route("/login").post( login )
router.route("/logout").post(logout);
router.route('/verifyOtp').post(verifyOtp)
router.route('/resendOtp').post(resendOtp)
router.route('/forgotPassword').post(forgotPassword)
router.route('/resetPassword').post(resetPassword)


export default router;