const ProductDB = require("../models/MongoDB/product");

exports.create = (req, res) => {
   //validate request
   if (!req.body) {
      res.status(400).send({ message: "Content cannot be empty" });
      return;
   }

   const newProduct = new ProductDB({
      productName: req.body.productName,
      image: req.body.image,
      alt: req.body.alt,
   });

   newProduct
      .save(newProduct)
      .then(() => {
         console.log("product created");
         res.status(200).send({
            message: "product created",
         });
      })
      .catch((err) => {
         res.status(500).send({
            message: err.message || "Error occured while creating product",
         });
      });
};

// retrieve all users / single user
exports.find = (req, res) => {
   ProductDB.find()
      .then((products) => {
         res.send(products);
      })
      .catch((err) => {
         res.status(500).send({
            message: err.message || "Error occured while finding products",
         });
      });
};
