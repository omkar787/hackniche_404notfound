const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const cors = require("cors");

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

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

module.exports = app;