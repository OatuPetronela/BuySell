import asyncHandler from "express-async-handler";
import Category from "../models/publishCategoryModel.js";


//@desc Fetch all categories
//@route GET/categories
//@access Public
let getCategories = asyncHandler(async (req, res) => {
  const allCategories = await Category.find({});
  res.json(allCategories);
});

//@desc Fetch a single category
//@route GET/categories/:id
//@access Public
const getCategoriesById = asyncHandler(async (req, res) => {
  const category = await Category.findById(req.params.id);
  if (category) {
    res.json(category);
  } else {
    res.status(404);
    throw new Error("Category not found");
  }
});

export { getCategories, getCategoriesById };
