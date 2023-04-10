import mongoose from "mongoose";

const categorySchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: "User",
    },
    name: {
      type: String,
      require: true,
    },
    imageUrl: {
      type: String,
      require: true,
    },
    hyperlink: {
      type: String,
      require: true,
    },
    links: [
      {
        name: {
          type: String,
          required: true,
        },
        url: {
          type: String,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Category = mongoose.model("Category", categorySchema);

export default Category;
