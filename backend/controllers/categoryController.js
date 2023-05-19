import asyncHandler from "express-async-handler";
import Category from "../models/publishCategoryModel.js";

let getCategories = asyncHandler(async (req, res) => {
  const allCategories = await Category.find({});
  res.json(allCategories);
});

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
