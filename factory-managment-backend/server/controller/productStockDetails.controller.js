var productStockDetails = require("../model/productStockDetails.model");

// create and save new order details
exports.create = (req, res) => {
  // validate request
  if (!req.body) {
    res.status(400).send({ message: req.body });
    return;
  }

  // order details

  const productStockDet = new productStockDetails({
    productId: req.body.productId,
    productCategory: req.body.productCategory,
    instock: req.body.instock,
    quantity: Number(req.body.quantity),
    price: Number(req.body.price),
  });

  // save order details in the database
  productStockDet
    .save(productStockDet)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error: Could Not Add Order Details.",
      });
    });
};

//retrive and return all new order details/retrieve a single order detail
exports.find = (req, res) => {
  if (req.query.id) {
    const id = req.query.id;

    productStockDetails
      .findById(id)
      .then((data) => {
        if (!data) {
          res
            .status(404)
            .send({ message: "Could Not Find Order Details With ID" + id });
        } else {
          res.send(data);
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: "Error While Retrieving Order Details With ID" + id,
        });
      });
  } else {
    productStockDetails
      .find()
      .then((matCode) => {
        res.send(matCode);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Error: Cannot Retrieve Order Details",
        });
      });
  }
};

//update order details
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({ message: "Data To Update Can Not Be Empty" });
  }

  const id = req.body.id;
  productStockDetails
    .findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(400).send({ message: "Order Details Are Not Found" });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error While Order Details Updateting" });
    });
};

//Delete a order details with a requested order id
exports.delete = (req, res) => {
  const id = req.body.id;

  productStockDetails
    .findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res
          .status(400)
          .send({ message: `Can Not Delete Order Details With $(id).` });
      } else {
        res.send({ message: "Order Details Was Deleted" });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error While Deleting Order Details." });
    });
};
