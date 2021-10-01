const router = require("express").Router();
let DeleteFeedback = require("../model/DeleteFeedback.model");

router.route("/").get((req, res) => {
  DeleteFeedback.find()
    .then((requests) => res.json(requests))
    .catch((err) => res.status(400).json(err.message));
});

router.route("/add").post((req, res) => {
  const name = req.body.Name;
  const reason = req.body.Reason;

  const feedback = new DeleteFeedback({
    name,
    reason,
  });

  feedback
    .save()
    .then((result) => res.json("Feedback send added"))
    .catch((err) => res.status(400).json(err.message));
});

module.exports = router;
