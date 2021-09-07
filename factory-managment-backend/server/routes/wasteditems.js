const router = require("express").Router();
let WastedItem = require("../model/WastedItem.model");

//get all the wastedItems list as a complex object(json)
router.route("/").get((req, res) => {
  WastedItem.find()
    .then((wasted) => res.json(wasted))
    .catch((err) => res.status(400).json(err.message));
});

router.route("/add").post((req, res) => {
  const wCode = req.body.Code;
  const wType = req.body.Type;
  const wCategory = req.body.Category;
  const wQuantity = Number(req.body.Quantity);
  const wSupplier = req.body.Supplier;
  const wDate = req.body.WastedDate;
  const wReason = req.body.Reason;

  const newWastedItem = new WastedItem({
    wCode,
    wType,
    wCategory,
    wQuantity,
    wSupplier,
    wDate,
    wReason,
  });

  newWastedItem
    .save()
    .then((result) => res.json("Wasted Item added"))
    .catch((err) => res.status(400).json(err.message));
});

//delete one according to id
router.route("/:id").delete((req, res) => {
  const id = req.params.id;

  WastedItem.deleteOne({ _id: id })
    .then((result) => res.json("deleted one"))
    .catch((err) => res.status(400).json(err.message));
});

module.exports = router;
