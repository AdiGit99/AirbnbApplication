import express from "express";
import {
  addConversation,
  getConversations,
  getConversation,
} from "../controllers/conversation.js";

const router = express.Router();

//new conv
router.post("/", addConversation);
router.get("/:userId", getConversations);
router.get("/find/:firstUserId/:secondUserId", getConversation);

export default router;
