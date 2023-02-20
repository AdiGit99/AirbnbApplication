import express from "express";
import {
  updateUser,
  deleteUser,
  getUser,
  getUserBasic,
  getUserByPhone,
  getUsers,
} from "../controllers/user.js";

import {
  verifyAdmin,
  verifyHealthcareProvider,
  verifyUser,
} from "../utils/verifyToken.js";

const router = express.Router();

router.put("/:id", verifyAdmin, updateUser);
router.delete("/:id", verifyUser, deleteUser);
router.get("/:id", verifyUser, getUser);
router.get("/getBasic/:id", getUserBasic);
router.get("/", verifyAdmin, getUsers);
router.get("/find/:phone", getUserByPhone);

export default router;

// router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
//   res.send(req.user);
// });
// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//   res.send(req.user);
// });
// router.get(
//   "/checkhealthcareprovider/:id",
//   verifyHealthcareProvider,
//   (req, res, next) => {
//     res.send(req.user);
//   }
// );
