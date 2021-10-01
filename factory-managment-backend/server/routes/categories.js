const router = require("express").Router();
let Category = require("../model/cate.model");

//get all the category list as a complex object(json) List
router.route("/").get((req, res) => {
  Category.find()
    .then((codes) => res.json(codes))
    .catch((err) => res.status(400).json(err.message));
});

module.exports = router;
