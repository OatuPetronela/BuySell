import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import colors from "colors";
import router from "./routes/routes.js";
import Product from "./models/publishProductModel.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Api is running...");
});

app.post("/products", async (req, res) => {
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
});

app.use("/categories", router);

app.use(notFound);

app.use(errorHandler);

const PORT = process.env.PORT || 8000;
app.listen(PORT, console.log(`Server started on port ${PORT}`.yellow.bold));
