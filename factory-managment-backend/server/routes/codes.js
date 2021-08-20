const router = require("express").Router();
let MaterialCode = require("../model/materialcode.model");

//get all the codes list as a complex object(json) List
router.route("/material/").get((req, res) => {
  MaterialCode.find()
    .then((codes) => res.json(codes))
    .catch((err) => res.status(400).json(err.message));
});

router.route("/material/:id").get((req, res) => {
  const id = req.params.id;
  MaterialCode.findById(id)
    .then((result) => res.json(result))
    .catch((err) => res.status(400).json(err.message));
});

module.exports = router;
