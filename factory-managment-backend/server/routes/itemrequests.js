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

  const request = new ItemRequest({
    reqCode,
    reqType,
    reqCategory,
    reqQuantity,
    reqDate,
  });

  request
    .save()
    .then((result) => res.json("Request added"))
    .catch((err) => res.status(400).json(err.message));
});
