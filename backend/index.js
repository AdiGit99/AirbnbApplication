import dotenv from "dotenv";
import mongoose from "mongoose";

/** Node dependencies */
import path from "path";
import { fileURLToPath } from "url";

/** Logging dependencies */
import morgan from "morgan";

/** Express */
import cors from "cors";
import express from "express";
import session from "express-session";
import MongoStore from "connect-mongo";
// import passport from "./passport.js";
import helmet from "helmet";
import multer from "multer";
import cookieParser from "cookie-parser";

/** Routes */
import userRoute from "./routes/users.js";
import authRoute from "./routes/auth.js";
import conversationRoute from "./routes/conversations.js";
import messageRoute from "./routes/messages.js";
import healthcareProviderRoute from "./routes/healthcareProvider.js";
// const postRoute = require("./routes/posts");

/** Socket IO */
import { createServer } from "http";
import { Server } from "socket.io";

dotenv.config();
const PORT = process.env.port || 8800;

/** Connect to MongoDB */
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected!");
});

// /** Passport Configuration */
// const passport = require("passport");
// require("./config/passport")(passport);

/** Start Server */
const app = express();
const router = express.Router();

/** Sessions Middleware */
app.use(
  session({
    secret: "production",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.MONGO_URL }),
  })
);

/** Passport Middlware */
// app.use(passport.initialize());
// app.use(passport.session());

/** Socket IO */
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3000",
  },
});

/** Middleware */
app.use(morgan("common"));
app.use(helmet());
app.use(cors());
app.use(cookieParser());
app.use(express.json());

/** Routes Definitions */
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
// app.use("/api/posts", postRoute);
app.use("/api/conversations", conversationRoute);
app.use("/api/messages", messageRoute);
app.use("/api/healthcareProvider", healthcareProviderRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

/** Upload */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use("/images", express.static(path.join(__dirname, "public/images")));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  try {
    return res.status(200).json("File uploded successfully");
  } catch (error) {
    console.error(error);
  }
});

// /** Socket IO Connections and events */
let users = [];

const addUser = (userId, socketId) => {
  !users.some((user) => user.userId === userId) &&
    users.push({ userId, socketId });
};

const removeUser = (socketId) => {
  users = users.filter((user) => user.socketId !== socketId);
};

const getUser = (userId) => {
  return users.find((user) => user.userId === userId);
};

io.on("connection", (socket) => {
  //when connect
  console.log("A user has connected.");

  //take userId and socketId from user
  socket.on("addUser", (userId) => {
    addUser(userId, socket.id);
    io.emit("getUsers", users);
  });

  //send and get message
  socket.on("sendMessage", ({ senderId, receiverId, text }) => {
    const user = getUser(receiverId);
    io.to(user.socketId).emit("getMessage", {
      senderId,
      text,
    });
  });

  //when disconnect
  socket.on("disconnect", () => {
    console.log("A user disconnected.");
    removeUser(socket.id);
    io.emit("getUsers", users);
  });
});

httpServer.listen(8800, () => {
  connect();
  console.log("Backend server is running!");
});
