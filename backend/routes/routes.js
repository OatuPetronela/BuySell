import express from "express";
import asyncHandler from "express-async-handler";
import Category from "../models/publishCategoryModel.js";

const router = express.Router();

//@desc Fetch all categories
//@route GET/categories
//@access Public
router.get(
  "/",
  asyncHandler(async (req, res, next) => {
    const allCategories = await Category.find({});
    res.json(allCategories);
  })
);

//@desc Fetch a single category
//@route GET/categories/:id
//@access Public
router.get(
  "/:id",
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

//@desc Create a new category
//@route POST/categories
//@access Public

export default router;
