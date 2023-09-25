import { Router } from "express";
import { cartsService } from "../services/carts.service.js";
import { ProductsService } from "../services/products.service.js";
import { PaymentService } from "../services/payment.service.js";
import { logger } from "../utils/logger.js";
import Stripe from "stripe";
import { options } from "../config/config.js";
import { paymentController } from "../controllers/payment.controller.js";

import {v4 as uuidv4} from 'uuid';

const router = Router();

router.post("/create-checkout-session", paymentController.paymentIntentProductsCart);
//TicketPurchase
router.get('/order/success', paymentController.purchaseConfirmationView);

  router.get('/order/error', async (req, res) => {
  
    res.render("errorPurchase");
  });

export {router as paymentRouter};