import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { createError } from "../utils/error.js";

//REGISTER
const register = async (req, res, next) => {
  try {
    //generate new password
    const salt = await bcrypt.genSaltSync(10);
    const hashedPassword = await bcrypt.hashSync(req.body.password, salt);

    //create new user
    const newUser = new User({
      ...req.body,
      password: hashedPassword,
    });

    //save user and respond
    await newUser.save();

    const isAdmin = newUser.role.includes("ROLE_ADMIN");
    const isHealthcareProvider = newUser.role.includes(
      "ROLE_HEALTHCARE_PROVIDER"
    );
    const token = jwt.sign(
      {
        id: newUser._id,
        isAdmin: isAdmin,
        isHealthcareProvider: isHealthcareProvider,
      },
      process.env.JWT
    );
    const { password, role, ...otherDetails } = newUser._doc;
    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json({ details: { ...otherDetails }, role });
  } catch (err) {
    next(err);
  }
};

//LOGIN
//validate input in frontend
//custom error message below
const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return next(createError(404, "User not found!"));
    }

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!isPasswordCorrect) {
      return next(createError(400, "Wrong email or password"));
    }

    const isAdmin = user.role.includes("ROLE_ADMIN");
    const isHealthcareProvider = user.role.includes("ROLE_HEALTHCARE_PROVIDER");
    const token = jwt.sign(
      {
        id: user._id,
        isAdmin: isAdmin,
        isHealthcareProvider: isHealthcareProvider,
      },
      process.env.JWT
    );

    const { password, role, ...otherDetails } = user._doc;
    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json({ details: { ...otherDetails }, role });
  } catch (err) {
    next(err);
  }
};

const checkUserByEmail = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
    next(err);
  }
};

const checkUserByPhone = async (req, res, next) => {
  try {
    const user = await User.findOne({ phone: req.body.phone });
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

export { register, login, checkUserByEmail, checkUserByPhone };
