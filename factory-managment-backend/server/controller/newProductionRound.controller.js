var newProductionRoundDetails = require("../model/newProductionRound.model");

// create and save new production round details
exports.create = (req, res) => {
  // validate request
  if (!req.body) {
    res.status(400).send({ message: req.body });
    return;
  }

<<<<<<< HEAD
    
    // new production round details
    
    const newProductionRoundDet = new newProductionRoundDetails({
        productId : req.body.productId,
        productCategory : req.body.productCategory,
        quantity : Number(req.body.quantity),
        esDays : Number(req.body.esDays),
        esEmployees : Number(req.body.esEmployees),
        status : req.body.status   
    })
=======
  // new production round details
>>>>>>> IT19129440

  const newProductionRoundDet = new newProductionRoundDetails({
    productId: req.body.productId,
    productCategory: req.body.productCategory,
    quantity: Number(req.body.quantity),
    esDays: Number(req.body.esDays),
    esEmployees: Number(req.body.esEmployees),
    status: req.body.status,
  });

  // save new production round details in the database
  newProductionRoundDet
    .save(newProductionRoundDet)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Error: Could Not Add New Production Round Details.",
      });
    });
};
//retrive and return all new production round details/retrieve a single production round details
exports.find = (req, res) => {
  if (req.query.id) {
    const id = req.query.id;

    newProductionRoundDetails
      .findById(id)
      .then((data) => {
        if (!data) {
          res.status(404).send({
            message: "Could Not Find New Production Round Details With ID" + id,
          });
        } else {
          res.send(data);
        }
      })
      .catch((err) => {
        res.status(500).send({
          message:
            "Error While Retrieving New Production Round Details With ID" + id,
        });
      });
  } else {
    newProductionRoundDetails
      .find()
      .then((matCode) => {
        res.send(matCode);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message ||
            "Error: Cannot Retrieve New Production Round Details",
        });
      });
  }
};

//update a new Production ROund
exports.update = (req, res) => {
  newProductionRoundDetails
    .updateOne(
      { _id: req.body.id },
      {
        $set: {
          productCategory: req.body.productCategory,
          quantity: Number(req.body.quantity),
          esDays: Number(req.body.esDays),
          esEmployees: Number(req.body.esEmployees),
        },
      }
    )
    .then((result) =>
      res.json("New Production Round Details Updated Successfully.")
    )
    .catch((err) => res.status(400).json(err.message));
};

//Delete a leave request  with specified leave details id in the request
exports.delete = (req, res) => {
  const id = req.body.id;

  newProductionRoundDetails
    .findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res.status(400).send({
          message: `Can Not Delete Production Round Details With $(id).`,
        });
      } else {
        res.send({ message: "New Production Round  Details Was Deleted" });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error While Deleting." });
    });
};
