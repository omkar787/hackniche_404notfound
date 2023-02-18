const serverless = require("serverless-http");
const express = require("express");
const app = express();

const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const morgan = require("morgan");

const userRouter = require("./routes/userRoutes");
const newsRouter = require("./routes/newsRoutes");

const AppError = require("./utils/appError");
const globalErrorHandler = require("./controllers/errorController");

// serving static files
app.use(express.static(path.join(__dirname, "public")));

const whitelist = [
  "http://localhost:5173",
  "http://localhost:3000",
  "https://hackniche-404notfound.vercel.app",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (
        whitelist.indexOf(origin) !== -1 ||
        !origin ||
        origin.includes("chrome") ||
        origin === "null" ||
        origin === null
      ) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    // origin: "http://localhost:3000",
    credentials: true,
  })
);
// app.options("*", cors());

// cookie parser
app.use(cookieParser());
// body parser, reading data from body into req.body
// limiting amount of data comes in the body
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));

app.use(morgan("dev"));

// Routes
app.use("/api/v1/users", userRouter);
app.use("/api/v1/news", newsRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

// GLOBAL ERRROR HANDLING MIDDLEWARE
app.use(globalErrorHandler);

dotenv.config({
  path: "./.env",
});

const database = process.env.MONGODB_URL.replace(
  "<PASSWORD>",
  process.env.MONGODB_PASSWORD
);

mongoose
  .connect(database, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log(`Database connected successfully!`))
  .catch((error) => console.log(error));

module.exports.handler = serverless(app);
