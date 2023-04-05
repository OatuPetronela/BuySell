import express from "express";
const router = express.Router();
import asyncHandler from "express-async-handler";
import categories from "../data/categories.js";

//@desc Fetch all categories
//@route GET/categories
//@access Public
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const allCategories = await categories;
    res.json(allCategories);
  })
);

//@desc Fetch a single category
//@route GET/categories/:id
//@access Public
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const category = await categories.findById(req.params.id);
    if (category) {
      res.json(category);
    } else {
      res.status(404).json({ message: "Category not found" });
    }
  })
);

export default router;
