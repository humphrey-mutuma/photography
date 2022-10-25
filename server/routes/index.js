import { Router } from "express";
const router = Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.status(200).json({ msg: "Hello wrold" });
});

export default router;
