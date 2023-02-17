const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const morgan = require("morgan");

const userRouter = require("./routes/userRoutes");
const AppError = require("./utils/appError");
const globalErrorHandler = require("./controllers/errorController");

const app = express();

// serving static files
app.use(express.static(path.join(__dirname, "public")));

app.options("*", cors());

// cookie parser
app.use(cookieParser());
// body parser, reading data from body into req.body
// limiting amount of data comes in the body
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));

app.use(morgan("dev"));

// Routes
app.use("/api/v1/users", userRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

// GLOBAL ERRROR HANDLING MIDDLEWARE
app.use(globalErrorHandler);

module.exports = app;
