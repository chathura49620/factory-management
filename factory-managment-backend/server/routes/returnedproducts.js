const router = require("express").Router();
let ReturnedProduct = require("../model/ReturnedProduct.model");

//get all the wastedItems list as a complex object(json)
router.route("/").get((req, res) => {
  ReturnedProduct.find()
    .then((wasted) => res.json(wasted))
    .catch((err) => res.status(400).json(err.message));
});

router.route("/add").post((req, res) => {
  const rCode = req.body.Code;
  const rType = req.body.Type;
  const rCategory = req.body.Category;
  const rQuantity = Number(req.body.Quantity);
  const rBuyer = req.body.Buyer;
  const rDate = req.body.ReturnedDate;
  const rReason = req.body.Reason;

  const newReturnedProduct = new ReturnedProduct({
    rCode,
    rType,
    rCategory,
    rQuantity,
    rBuyer,
    rDate,
    rReason,
  });

  newReturnedProduct
    .save()
    .then((result) => res.json("Returned Item added"))
    .catch((err) => res.status(400).json(err.message));
});

//delete one according to id
router.route("/:id").delete((req, res) => {
  const id = req.params.id;

  ReturnedProduct.deleteOne({ _id: id })
    .then((result) => res.json("deleted one"))
    .catch((err) => res.status(400).json(err.message));
});

router.route("/update/:id").post((req, res) => {
  ReturnedProduct.updateOne(
    { _id: req.params.id },
    {
      $set: {
        rCode: req.body.rCode,
        rType: req.body.rType,
        rCategory: req.body.rCategory,
        rQuantity: Number(req.body.rQuantity),
        rBuyer: req.body.rBuyer,
        rDate: req.body.rDate,
        rReason: req.body.rReason,
      },
    }
  )
    .then((result) => res.json("Updated"))
    .catch((err) => res.status(400).json(err.message));
});

module.exports = router;
