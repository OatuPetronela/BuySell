import express from "express";
import multer from "multer";
import {
  getCategories,
  getCategoriesById,
} from "../controllers/categoryController.js";
import postProducts from "../controllers/productController.js";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

//@desc Fetch all categories
//@route GET/categories
//@access Public
router.route("/categories").get(getCategories);

//@desc Fetch a single category
//@route GET/categories/:id
//@access Public
router.route("/categories/:id").get(getCategoriesById);

//@desc Create a new product
//@route POST/products
//@access Public
router.route("/products").post(upload.array("imageUrl", 10), postProducts);

export default router;
