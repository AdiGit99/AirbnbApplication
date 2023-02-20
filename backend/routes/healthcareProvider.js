import express from "express";
import {
  updateHealthcareProvider,
  deleteHealthcareProvider,
  getHealthcareProvider,
  changeHealthcareProviderStatus,
} from "../controllers/healthcareProvider.js";

import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

router.put("/:id", verifyUser, updateHealthcareProvider);
router.delete("/id", verifyUser, deleteHealthcareProvider);
router.get("/:id", verifyUser, getHealthcareProvider);
router.put("/:id", verifyAdmin, changeHealthcareProviderStatus);

export default router;
