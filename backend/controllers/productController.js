import Product from "../models/publishProductModel.js";
import fs from "fs";

const postProducts = (req, res) => {
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
  }
};
  export default postProducts;

