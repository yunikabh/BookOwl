import { Router } from "express";
import { verifyUser } from "../middlewares/auth.middleware.js";

import { initiateKhaltiPayment,verifyKhaltiPaymentController } from "../controllers/payment.controller.js";
const router = Router();

router.route('/initiateKhaltiPayment/:orderId').post(verifyUser,initiateKhaltiPayment);
router.route('/verifyKhaltiPaymentController').get(verifyUser,verifyKhaltiPaymentController)

export default router ;