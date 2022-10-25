import express, { json, urlencoded } from "express";
import createError from "http-errors";
// import { join } from "path";
import colors from "colors";
import cookieParser from "cookie-parser";
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()
import cors from "cors";
import dbConnect from "./config/dbConnect.js";
// import router
import indexRoute from "./routes/index.js";
import usersRoute from "./routes/users.js";

const app = express();
const PORT = process.env.PORT || 5000;

// connect to mongodb
await dbConnect();

// middlewares
app.use(cors());
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(static(join(__dirname, "public")));

// routes
app.use("/api/", indexRoute);
app.use("/api/users", usersRoute);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

app.listen(PORT, () =>
  console.log(`app running on port http://localhost:${PORT}`.blue)
);
