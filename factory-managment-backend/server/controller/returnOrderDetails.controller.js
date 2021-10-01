var returnOrderDetails = require("../model/returnOrderDetails.model");

// create and save new order details
exports.create = (req, res) => {
  // validate request
  if (!req.body) {
    res.status(400).send({ message: req.body });
    return;
  }

  // order details

  const returnorderDet = new returnOrderDetails({
    orderId: req.body.orderId,
    email: req.body.email,
    returnReason: req.body.returnReason,
  });

  // save order details in the database
  returnorderDet
    .save(returnorderDet)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error: Could Not Add Order Details.",
      });
    });
};
