import { Router } from "express";
import { verifyUser } from "../middlewares/auth.middleware.js";
import { createOrder, getOrderDetails,getOrderDetailsById} from "../controllers/order.controller.js";
const router = Router();

router.route('/createOrder/:userId').post(verifyUser,createOrder);
router.route('/getOrderDetails').get(verifyUser,getOrderDetails)
router.route('/getOrderDetailsById/:orderId').get(verifyUser,getOrderDetailsById )


export default router ;