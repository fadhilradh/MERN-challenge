const express = require("express");
const route = express.Router();
const productController = require("../controllers/productController");

route.get("/api/products", productController.find);
route.post("/api/products", productController.create);

module.exports = route;
