import jwt from "jsonwebtoken";
import { createError } from "./error.js";

const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    // return next(createError(401, "You are not authenticated"));
    return res.send(createError(401, "You are not authenticated"));
  }
  jwt.verify(token, process.env.JWT, (err, user) => {
    if (err) {
      // return next(createError(403, "Token is not valid!"));
      return res.send(createError(403, "Token is not valid!"));
    }
    req.user = user;
  });
  next();
};

const verifyUser = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      return next(createError(403, "You are not authorized!"));
    }
  });
};

const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      return next(createError(403, "You are not authorized!"));
    }
  });
};

const verifyHealthcareProvider = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isHealthcareProvider || req.user.isAdmin) {
      next();
    } else {
      return next(createError(403, "You are not authorized!"));
    }
  });
};

export { verifyToken, verifyUser, verifyAdmin, verifyHealthcareProvider };
