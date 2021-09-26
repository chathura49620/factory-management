const router = require("express").Router();
let ItemRequest = require("../model/ItemRequest.model");

//get all the itemRequests list as a complex object(json)
router.route("/").get((req, res) => {
  ItemRequest.find()
    .then((requests) => res.json(requests))
    .catch((err) => res.status(400).json(err.message));
});

router.route("/add").post((req, res) => {
  const reqCode = req.body.Code;
  const reqType = req.body.Type;
  const reqCategory = req.body.Category;
  const reqQuantity = Number(req.body.Quantity);
  const reqDate = req.body.RequestDate;
  const reqStatus = req.body.Status;

  const request = new ItemRequest({
    reqCode,
    reqType,
    reqCategory,
    reqQuantity,
    reqDate,
    reqStatus,
  });

  request
    .save()
    .then((result) => res.json("Request added"))
    .catch((err) => res.status(400).json(err.message));
});

//delete one according to id
router.route("/:id").delete((req, res) => {
  const id = req.params.id;

  ItemRequest.deleteOne({ _id: id })
    .then((result) => res.json("deleted one"))
    .catch((err) => res.status(400).json(err.message));
});

router.route("/update/:id").post((req, res) => {
  ItemRequest.updateOne(
    { _id: req.params.id },
    {
      $set: {
        reqCode: req.body.reqCode,
        reqType: req.body.reqType,
        reqCategory: req.body.reqCategory,
        reqQuantity: Number(req.body.reqQuantity),
        reqDate: req.body.reqDate,
        reqStatus: req.body.reqStatus,
      },
    }
  )
    .then((result) => res.json("Updated"))
    .catch((err) => res.status(400).json(err.message));
});

module.exports = router;
