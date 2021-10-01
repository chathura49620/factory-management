const router = require("express").Router();
let Item = require("../model/Item.model");
let ItemRecord = require("../model/ItemRecord.model");

//get all the Items list as a complex object(json)
router.route("/").get((req, res) => {
  Item.find()
    .then((Items) => res.json(Items))
    .catch((err) => res.status(400).json(err.message));
});

router.route("/add/record").post((req, res) => {
  const iCode = req.body.Code;
  const iType = req.body.Type;
  const iCategory = req.body.Category;
  const iQuantity = Number(req.body.Quantity);
  const iSupplier = req.body.Supplier;
  const iAddedDate = req.body.AddedDate;

  const newItemRecord = new ItemRecord({
    iCode,
    iType,
    iCategory,
    iQuantity,
    iSupplier,
    iAddedDate,
  });

  newItemRecord
    .save()
    .then((result) => res.json("Item added"))
    .catch((err) => res.status(400).json(err.message));
});

router.route("/add").post((req, res) => {
  const iCode = req.body.Code;
  const iType = req.body.Type;
  const iCategory = req.body.Category;
  let iQuantity = Number(req.body.Quantity);
  const iSupplier = req.body.Supplier;
  const iAddedDate = req.body.AddedDate;
  const q = iQuantity;
  iQuantity = 1;

  //const newItem = new Item({ pCode, pCategory, pQuantity, pAddedDate });
  let array = [];
  for (let i = 0; i < q; i++) {
    array[i] = { iCode, iType, iCategory, iQuantity, iSupplier, iAddedDate };
  }

  Item.insertMany(array)
    .then((result) => res.json("Added"))
    .catch((err) => res.status(400).json(err.message));

  // newItem
  //.save()
  //.then((result) => res.json("Item added"))
  //.catch((err) => res.status(400).json(err.message));
});

//delete item record according to date time(multiple documents)
router.route("/record/:date").delete((req, res) => {
  const date = req.params.date;

  Item.deleteMany({ iAddedDate: date }) 
    .then((result) => res.json("deleted"))
    .catch((err) => res.status(400).json(err.message));
});

//delete item record according to date time(multiple documents) on ItemRecord Collection
router.route("/multiplerecords/:date").delete((req, res) => {
  const date = req.params.date;

  ItemRecord.deleteMany({ iAddedDate: date })
    .then((result) => res.json("deleted"))
    .catch((err) => res.status(400).json(err.message));
});

//delete one according to id
router.route("/:id").delete((req, res) => {
  const id = req.params.id;

  Item.deleteOne({ _id: id })
    .then((result) => res.json("deleted one"))
    .catch((err) => res.status(400).json(err.message));
});

//delete one according to id on ItemRecors Collection
router.route("/records/specific/:id").delete((req, res) => {
  const id = req.params.id;

  ItemRecord.deleteOne({ _id: id })
    .then((result) => res.json("deleted one"))
    .catch((err) => res.status(400).json(err.message));
});

//delete data using date and supplier name on Item Collection
router.route("/specific/:supplier/:date").delete((req, res) => {
  const supplier = req.params.supplier;
  const addedDate = req.params.date;

  Item.deleteMany({ iSupplier: supplier, iAddedDate: addedDate })
    .then((result) => res.json("deleted Many from item collection"))
    .catch((err) => res.status(400).json(err.message));
});

router.route("/:id").get((req, res) => {
  const id = req.params.id;
  Item.findById(id)
    .then((result) => res.json(result))
    .catch((err) => res.status(400).json(err.message));
});   
    
//getting all the document of tha date
router.route("/record/:date").get((req, res) => {
  const date = req.params.date;
  Item.find({ iAddedDate: date })
    .then((result) => res.json(result))
    .catch((err) => res.status(400).json(err.message));
});

//getting all the document of tha date of itemRecord collection
router.route("/multiplerecords/:date").get((req, res) => {
  const date = req.params.date;
  ItemRecord.find({ iAddedDate: date })
    .then((result) => res.json(result))
    .catch((err) => res.status(400).json(err.message));
});

//updating one document
router.route("/update/:id").post((req, res) => {
  Item.updateOne(
    { _id: req.params.id },
    {
      $set: {
        iCode: req.body.iCode,
        iType: req.body.iType,
        iCategory: req.body.iCategory,
        iQuantity: Number(req.body.iQuantity),
        iSupplier: req.body.iSupplier,
        iAddedDate: req.body.iAddedDate,
      },
    }
  )
    .then((result) => res.json("Updated"))
    .catch((err) => res.status(400).json(err.message));
});

//updating multiple documents
router.route("/update/record/:date").post((req, res) => {
  const date = req.params.date;

  Item.updateMany(
    { iAddedDate: date },
    {
      $set: {
        iCode: req.body.iCode,
        iType: req.body.iType,
        iCategory: req.body.iCategory,
        iQuantity: Number(req.body.iQuantity),
        iSupplier: req.body.iSupplier,
      },
    }
  )
    .then((result) => res.json("Updated"))
    .catch((err) => res.status(400).json(err.message));
});

router.route("/update/quantity/itemRecord").post((req, res) => {
  let quantity = Number(req.body.quantity);

  const id = req.body.id;
  ItemRecord.updateOne(
    { _id: id },
    {
      $set: {
        iQuantity: quantity,
      },
    }
  )
    .then((result) => res.json("Updated"))
    .catch((err) => res.status(400).json(err.message));
});

router.route("/object/data/:supplier/:date").get((req, res) => {
  const supplier = req.params.supplier;
  const addedDate = req.params.date;

  ItemRecord.findOne({ iAddedDate: addedDate, iSupplier: supplier })
    .then((result) => res.json(result))
    .catch((err) => res.status(400).json(err.message));
});

router.route("/object/data/:supplier/:date").delete((req, res) => {
  const supplier = req.params.supplier;
  const addedDate = req.params.date;

  ItemRecord.deleteOne({ iAddedDate: addedDate, iSupplier: supplier })
    .then((result) => res.json("deleted one"))
    .catch((err) => res.status(400).json(err.message));
});

//new Addition not in controllers
router.route("/update/unique/record/:id").post((req, res) => {
  ItemRecord.updateOne(
    { _id: req.params.id },
    {
      $set: {
        iCode: req.body.iCode,
        iType: req.body.iType,
        iCategory: req.body.iCategory,
        iQuantity: Number(req.body.iQuantity),
        iSupplier: req.body.iSupplier,
        iAddedDate: req.body.iAddedDate,
      },
    }
  )
    .then((result) => res.json("Updated"))
    .catch((err) => res.status(400).json(err.message));
});

module.exports = router;
