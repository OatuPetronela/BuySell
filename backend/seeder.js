import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import users from "./data/users.js";
import categories from "./data/categories.js";
import User from "./models/userModel.js";
import Product from "./models/publishProductModel.js";
import products from "./data/products.js";
import connectDB from "./config/db.js";
import Category from "./models/publishCategoryModel.js";

dotenv.config();

await connectDB();

const importData = async () => {
  try {
    await Category.deleteMany();
    await User.deleteMany();
    await Product.deleteMany();

    const createdUsers = await User.insertMany(users);

    const adminUser = createdUsers[0].id;
    const sampleCategories = categories.map((category) => {
      return {
        ...category,
        user: adminUser,
      };
    });
    await Category.insertMany(sampleCategories);

    const sampleProducts = products.map((product) => {
      return {
        ...product,
        user: adminUser,
      };
    });
    await Product.insertMany(sampleProducts);

    console.log("data imported!".green.inverse);
    process.exit;
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Category.deleteMany();
    await User.deleteMany();
    await Product.deleteMany();

    console.log("data distroyed!".red.inverse);
    process.exit;
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] == "-d") {
  destroyData();
} else {
  importData();
}
