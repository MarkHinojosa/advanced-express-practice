import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
});

const Product = mongoose.model("Product", schema);

export default Product;

