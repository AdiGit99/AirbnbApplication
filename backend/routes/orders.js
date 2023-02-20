import express from "express";
import { addJob, deleteJob, updateJob } from "../controllers/job.js";

const router = express.Router();

router.post("/", addJob);
router.delete("/:id", deleteJob);
router.put("/:id", updateJob);

export default router;
