var category = require("../model/category.model");

// create and save new user
exports.create = (req, res) => {
  // validate request
  if (!req.body) {
    res.status(400).send({ message: req.body });
    return;
  }

  // new user

  const user = new category({
    name: req.body.name,
    email: req.body.email,
    gender: req.body.gender,
    status: req.body.status,
  });

  // save user in the database
  user
    .save(user)
    .then((data) => {
      // res.send(data)
      res.redirect("/");
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while creating a create operation",
      });
    });
};

//retrive and return all users/retive a single user'
exports.find = (req, res) => {
  if (req.query.id) {
    const id = req.query.id;

    category
      .findById(id)
      .then((data) => {
        if (!data) {
          res.status(404).send({ message: "not found user with id" + id });
        } else {
          res.send(data);
        }
      })
      .catch((err) => {
        res
          .status(500)
          .send({ message: "Error while retriving user with id" + id });
      });
  } else {
    category
      .find()
      .then((user) => {
        res.send(user);
      })
      .catch((err) => {
        res
          .status(500)
          .send({ message: err.message || "Error on retriving user" });
      });
  }
};

//update a new identify user by user id
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({ message: "Data to update can not be empty" });
  }

  const id = req.params.id;
  category
    .findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res
          .status(400)
          .send({
            message: `cannot Update user with $(id). Maybe user not found`,
          });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error while updateting" });
    });
};

//Delete a user with specified user id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  category
    .findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res
          .status(400)
          .send({
            message: `cannot Delete user with $(id). Maybe user not found`,
          });
      } else {
        res.send({ message: "USER WAS DELETED" });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error while Deleting" });
    });
};
