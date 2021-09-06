const router = require("express").Router();
let WastedItem = require("../model/WastedItem.model");

//get all the wastedItems list as a complex object(json)
router.route("/").get((req, res) => {
  WastedItem.find()
    .then((wasted) => res.json(wasted))
    .catch((err) => res.status(400).json(err.message));
});

module.exports = router;
