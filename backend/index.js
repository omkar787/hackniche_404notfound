const mongoose = require("mongoose");
const dotenv = require("dotenv");

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

const app = require("./app");

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});

process.on("unhandledRejection", (error) => {
  console.log(`UNHANDLED REJECTION | SHUTTING DOWN ...`);
  console.log(error.name, error.message);
  server.close(() => {
    process.exit(1);
  });
});

process.on("SIGTERM", () => {
  console.log("👋 SIGTERM RECEIVED! Shutting down server!");
  server.close(() => {
    console.log("Process terminated");
  });
});
