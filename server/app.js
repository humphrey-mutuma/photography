import express, { json, urlencoded } from "express";
import createError from "http-errors";
// import { join } from "path";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import cors from "cors";

// import router
// import indexRouter from "./routes/index";
// import usersRouter from "./routes/users";

const app = express();
const PORT = process.env.PORT || 5000;

// middlewares
app.use(cors());
// app.use(logger("dev"));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(static(join(__dirname, "public")));

// routes
app.use("/", (req,res) => res.send("hello chief"));
// app.use("/users", usersRouter);

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
  console.log(`app running on post http://localhost:${PORT}`)
);
