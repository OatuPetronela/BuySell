import express from "express";
import {
  getCategories,
  getCategoriesById,
} from "../controllers/categoryController.js";

const router = express.Router();

router.route("/categories").get(getCategories);

router.route("/categories/:id").get(getCategoriesById);

export default router;
