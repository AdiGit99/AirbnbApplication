import express from "express";
import {
  register,
  login,
  checkUserByEmail,
  checkUserByPhone,
} from "../controllers/auth.js";

// const passport = require("passport");

const router = express.Router();
router.post("/register", register);
router.post("/login", login);
router.post("/checkByEmail/", checkUserByEmail);
router.post("/checkByPhone/", checkUserByPhone);

// router.get("/logout", (req, res) => {
//     req.logout();
//     res.redirect("http://localhost:3000/")
// })

// router.get(
//   "/google",
//   passport.authenticate("google", { scope: ["email", "profile"] })
// );

// router.get(
//   "/google/callback",
//   passport.authenticate("google", {
//     successRedirect: "http://localhost:3000",
//     failureRedirect: "/login",
//   })
// );

// router.get(
//   "/facebook",
//   passport.authenticate("facebook", { scope: ["email", "profile"] })
// );

// router.get(
//   "/facebook/callback",
//   passport.authenticate("facebook", {
//     successRedirect: "http://localhost:3000",
//     failureRedirect: "/login",
//   })
// );

export default router;
