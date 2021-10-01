var previousProductionRoundDetails = require("../model/previousProductionRound.model");

// create and save new production round details
exports.create = (req, res) => {
  // validate request
  if (!req.body) {
    res.status(400).send({ message: req.body });
    return;
  }

  // new production round details

  const previousProductionRoundDet = new previousProductionRoundDetails({
    productId: req.body.productId,
    productCategory: req.body.productCategory,
    quantity: Number(req.body.quantity),
    completedQuantity: Number(req.body.completedQuantity),
    remainingQuantity: Number(req.body.remainingQuantity),
    status: req.body.status,
  });

  // save new production round details in the database
  previousProductionRoundDet
    .save(previousProductionRoundDet)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Error: Could Not Add Previous Production Round Details.",
      });
    });
};
//retrive and return all new production round details/retrieve a single production round details
exports.find = (req, res) => {
  if (req.query.id) {
    const id = req.query.id;

    previousProductionRoundDetails
      .findById(id)
      .then((data) => {
        if (!data) {
          res.status(404).send({
            message:
              "Could Not Find Previous Production Round Details With ID" + id,
          });
        } else {
          res.send(data);
        }
      })
      .catch((err) => {
        res.status(500).send({
          message:
            "Error While Retrieving Previous Production Round Details With ID" +
            id,
        });
      });
  } else {
    previousProductionRoundDetails
      .find()
      .then((matCode) => {
        res.send(matCode);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message ||
            "Error: Cannot Retrieve Previous Production Round Details",
        });
      });
  }
};

//update a new Production ROund
exports.update = (req, res) => {
  if (!req.body) {
    return res
      .status(400)
      .send({ message: "Data To Be Update Can Not Be Empty" });
  }

  const id = req.body.id;
  previousProductionRoundDetails
    .findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res
          .status(400)
          .send({ message: "Previous Production Round Details Is Not Found" });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error while Updateting Details" });
    });
};

//Delete a leave request  with specified leave details id in the request
exports.delete = (req, res) => {
  const id = req.body.id;

  previousProductionRoundDetails
    .findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res.status(400).send({
          message: `Can Not Delete Previous Production Round Details With $(id).`,
        });
      } else {
        res.send({ message: "Previous Production Round  Details Was Deleted" });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error While Deleting." });
    });
};
