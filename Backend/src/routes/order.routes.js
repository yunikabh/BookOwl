import { Router } from "express";
import { verifyUser } from "../middlewares/auth.middleware.js";
import { createOrder, getOrderDetails } from "../controllers/order.controller.js";
const router = Router();

router.route('/createOrder/:userId').post(verifyUser,createOrder);
router.route('/getOrderDetails/:orderId').get(verifyUser,getOrderDetails)



export default router ;