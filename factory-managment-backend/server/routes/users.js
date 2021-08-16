const router = require("express").Router();
let User = require("../model/user.model");

//get all the Items list as a complex object(json)
router.route("/").get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json(err.message));
});

router.route("/:id").get((req, res) => {
  const id = req.params.id;
  User.findById(id)
    .then((result) => res.json(result))
    .catch((err) => res.status(400).json(err.message));
});

module.exports = router;
