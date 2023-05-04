import express from "express";
import asyncHandler from "express-async-handler";
import Category from "../models/publishCategoryModel.js";
import Product from "../models/publishProductModel.js";
import multer from "multer";
import fs from "fs";

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

//@desc Fetch all categories
//@route GET/categories
//@access Public
router.get(
  "/categories",
  asyncHandler(async (req, res, next) => {
    const allCategories = await Category.find({});
    res.json(allCategories);
  })
);

//@desc Fetch a single category
//@route GET/categories/:id
//@access Public
router.get(
  "/categories/:id",
  asyncHandler(async (req, res) => {
    const category = await Category.findById(req.params.id);
    if (category) {
      res.json(category);
    } else {
      res.status(404);
      throw new Error("Category not found");
    }
  })
);

//@desc Create a new product
//@route POST/products
//@access Public
router.post("/products", upload.array('imageUrl', 10), (req, res) => {
  const imageBuffer = fs.readFileSync(req.files[0].path);
  try {
    const product = new Product({
      title: req.body.title,
      description: req.body.description,
      imageUrl: imageBuffer,
      category: req.body.category,
    });

    const createdProduct = product.save();

    res.status(201).json(createdProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
    };
  });


export default router;