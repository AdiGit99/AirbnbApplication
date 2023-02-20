import express from "express";
import {
  addPayment,
  deletePayment,
  updatePayment,
} from "../controllers/payment.js";

const router = express.Router();

router.post("/", addPayment);
router.delete("/:id", deletePayment);
router.put("/:id", updatePayment);

export default router;
