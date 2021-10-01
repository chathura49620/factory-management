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

//delete one according to id
router.route("/:id").delete((req, res) => {
  const id = req.params.id;

  User.deleteOne({ _id: id })
    .then((result) => res.json("deleted one"))
    .catch((err) => res.status(400).json(err.message));
});

router.route("/update/:id").post((req, res) => {
  const id = req.params.id;
  User.updateOne(
    { _id: id },
    {
      $set: {
        fullName: req.body.FullName,
        dob: req.body.BirthDate,
        email: req.body.Email,
        contact: req.body.Contact,
        age: Number(req.body.Age),
        gender: req.body.Gender,
        address: req.body.Address,
        designation: req.body.Designation,
        bankName: req.body.BankName,
        accountNumber: req.body.AccountNumber,
        branch: req.body.Branch,
        branchCode: req.body.BranchCode,
        numberOfFamilyMembers: req.body.NumberOfFamilyMembers,
      },
    }
  )
    .then((result) => res.json("Updated"))
    .catch((err) => res.status(400).json(err.message));
});

module.exports = router;
