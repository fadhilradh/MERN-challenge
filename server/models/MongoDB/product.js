const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
   productName: {
      type: String,
      required: true,
   },
   image: {
      type: String,
      required: false,
   },
   alt: {
      type: String,
      required: false,
   },
});

const ProductDB = mongoose.model("products", productSchema);

module.exports = ProductDB;
