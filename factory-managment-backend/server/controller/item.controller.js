let Item = require("../model/Item.model");
let ItemRecord = require("../model/ItemRecord.model");

//get all the Items list as a complex object(json)
exports.findAllItems = (req, res) => {
  Item.find()
    .then((Items) => res.json(Items))
    .catch((err) => res.status(400).json(err.message));
};

exports.addNewItemRecord = (req, res) => {
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
};

exports.addNewItems = (req, res) => {
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
};

//delete item record according to date time(multiple documents)
exports.deleteItemRecords = (req, res) => {
  const date = req.params.date;

  Item.deleteMany({ iAddedDate: date })
    .then((result) => res.json("deleted"))
    .catch((err) => res.status(400).json(err.message));
};

//delete item record according to date time(multiple documents) on ItemRecord Collection
exports.deleteMultipleRecords = (req, res) => {
  const date = req.params.date;

  ItemRecord.deleteMany({ iAddedDate: date })
    .then((result) => res.json("deleted"))
    .catch((err) => res.status(400).json(err.message));
};

//delete one according to id
exports.deleteOneOfId = (req, res) => {
  const id = req.params.id;

  Item.deleteOne({ _id: id })
    .then((result) => res.json("deleted one"))
    .catch((err) => res.status(400).json(err.message));
};

//delete one according to id on ItemRecors Collection
exports.deleteOneOfIdFromItemRecords = (req, res) => {
  const id = req.params.id;

  ItemRecord.deleteOne({ _id: id })
    .then((result) => res.json("deleted one"))
    .catch((err) => res.status(400).json(err.message));
};

//delete data using date and supplier name on Item Collection
exports.deleteAccordingToSNameAndDate = (req, res) => {
  const supplier = req.params.supplier;
  const addedDate = req.params.date;

  Item.deleteMany({ iSupplier: supplier, iAddedDate: addedDate })
    .then((result) => res.json("deleted Many from item collection"))
    .catch((err) => res.status(400).json(err.message));
};

exports.getSpecificItem = (req, res) => {
  const id = req.params.id;
  Item.findById(id)
    .then((result) => res.json(result))
    .catch((err) => res.status(400).json(err.message));
};

//getting all the document of tha date
exports.getAllDataOfSpecificDate = (req, res) => {
  const date = req.params.date;
  Item.find({ iAddedDate: date })
    .then((result) => res.json(result))
    .catch((err) => res.status(400).json(err.message));
};

//getting all the document of tha date of itemRecord collection
exports.getAllDataOfDateOnIRecords = (req, res) => {
  const date = req.params.date;
  ItemRecord.find({ iAddedDate: date })
    .then((result) => res.json(result))
    .catch((err) => res.status(400).json(err.message));
};

//updating one document
exports.updateOneItem = (req, res) => {
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
};

//updating multiple documents
exports.updateMultipleOfDate = (req, res) => {
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
};

exports.updateOneOnIRecords = (req, res) => {
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
};

exports.findOneAccordingToDateAndSupplier = (req, res) => {
  const supplier = req.params.supplier;
  const addedDate = req.params.date;

  ItemRecord.findOne({ iAddedDate: addedDate, iSupplier: supplier })
    .then((result) => res.json(result))
    .catch((err) => res.status(400).json(err.message));
};

exports.deleteOneAccordingToDateAndSup = (req, res) => {
  const supplier = req.params.supplier;
  const addedDate = req.params.date;

  ItemRecord.deleteOne({ iAddedDate: addedDate, iSupplier: supplier })
    .then((result) => res.json("deleted one"))
    .catch((err) => res.status(400).json(err.message));
};
