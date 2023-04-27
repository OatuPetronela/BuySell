import express from "express";
import asyncHandler from "express-async-handler";
import Category from "../models/publishCategoryModel.js";
import Product from "../models/publishProductModel.js";

const router = express.Router();

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
router.post("/products", asyncHandler(async (req, res) => {
  try {
    const product = new Product({
      title: req.body.title,
      description: req.body.description,
    });

    const createdProduct = await product.save();

    res.status(201).json(createdProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
    }
  })
);

export default router;