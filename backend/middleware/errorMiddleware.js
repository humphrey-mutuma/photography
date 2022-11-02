import * as dotenv from "dotenv";
dotenv.config();

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;

  // console.log("jc", process.env.NODE_ENV);
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV == "production" ? null : err.stack,
  });
  next();
};

export default errorHandler;
