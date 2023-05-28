import express from "express";
import multer from "multer";
import postProducts from "../controllers/productController.js";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.route("/products").post(upload.array("imageUrl", 10), postProducts);

export default router;
