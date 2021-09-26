const express = require("express");
const route = express.Router();

const contoller = require("../controller/controller");

//store Manager APIs
route.get("/", contoller.items.findAllItems);
route.post("/add/record", contoller.items.addNewItemRecord);
route.post("/add", contoller.items.addNewItems);
route.delete("/record/:date", contoller.items.deleteItemRecords);
route.delete("/multiplerecords/:date", contoller.items.deleteMultipleRecords);
route.delete("/:id", contoller.items.deleteOneOfId);
route.delete(
  "/records/specific/:id",
  contoller.items.deleteOneOfIdFromItemRecords
);
route.delete(
  "/specific/:supplier/:date",
  contoller.items.deleteAccordingToSNameAndDate
);
route.get("/:id", contoller.items.getSpecificItem);
route.get("/record/:date", contoller.items.getAllDataOfSpecificDate);
route.get("/multiplerecords/:date", contoller.items.getAllDataOfDateOnIRecords);
route.post("/update/:id", contoller.items.updateOneItem);
route.post("/update/record/:date", contoller.items.updateMultipleOfDate);
route.post("/update/quantity/itemRecord", contoller.items.updateOneOnIRecords);
route.get(
  "/object/data/:supplier/:date",
  contoller.items.findOneAccordingToDateAndSupplier
);
route.delete(
  "/object/data/:supplier/:date",
  contoller.items.deleteOneAccordingToDateAndSup
);
route.post("/update/unique/record/:id", contoller.items.updateItemRecord);

//Super Admin Category APIs
route.post("/api/categories", contoller.category.create);
route.get("/api/categories", contoller.category.find);
route.put("/api/categories/", contoller.category.update);
route.delete("/api/categories/", contoller.category.delete);

// Super Admin Metirial Code APIs
route.post("/api/meterial-code/", contoller.materialCode.create);
route.get("/api/meterial-code/", contoller.materialCode.find);
route.put("/api/meterial-code/", contoller.materialCode.update);
route.delete("/api/meterial-code/", contoller.materialCode.delete);

// Super Admin Product Code APIs
route.post("/api/product-code/", contoller.productcode.create);
route.get("/api/product-code/", contoller.productcode.find);
route.put("/api/product-code/", contoller.productcode.update);
route.delete("/api/product-code/", contoller.productcode.delete);

// Super Admin Bill Type APIs
route.post("/api/bill-type/", contoller.billType.create);
route.get("/api/bill-type/", contoller.billType.find);
route.put("/api/bill-type/", contoller.billType.update);
route.delete("/api/bill-type/", contoller.billType.delete);

// Super Admin Bills APIs
route.post("/api/bills/", contoller.bills.create);
route.get("/api/bills/", contoller.bills.find);
route.put("/api/bills/", contoller.bills.update);
route.delete("/api/bills/", contoller.bills.delete);

//Super Admin User Role APIs
route.get("/api/user-roles/", contoller.userRole.find);
route.post("/api/user-roles/", contoller.userRole.create);

//login APIs
route.get("/api/login/", contoller.login.find);

//Super Admin Factory Details APIs
route.post("/api/factory-details/", contoller.factoryDetails.create);
route.get("/api/factory-details/", contoller.factoryDetails.find);
route.put("/api/factory-details/", contoller.factoryDetails.update);
route.delete("/api/factory-details/", contoller.factoryDetails.delete);

//Employee Leave Details APIs
route.post("/api/leave-details/", contoller.leaveDetails.create);
route.get("/api/leave-details/", contoller.leaveDetails.find);
route.put("/api/leave-details/", contoller.leaveDetails.update);
route.delete("/api/leave-details/", contoller.leaveDetails.delete);

//employee assignment APIs
route.post("/api/assignment-details/", contoller.assignmentDetails.create);
route.get("/api/assignment-details/", contoller.assignmentDetails.find);
route.put("/api/assignment-details/", contoller.assignmentDetails.update);
route.delete("/api/assignment-details/", contoller.assignmentDetails.delete);

module.exports = route;
//New Production Round Details APIs
route.post(
  "/api/newProRound-details/",
  contoller.newProductionRoundDetails.create
);
route.get(
  "/api/newProRound-details/",
  contoller.newProductionRoundDetails.find
);
route.put(
  "/api/newProRound-details/",
  contoller.newProductionRoundDetails.update
);
route.delete(
  "/api/newProRound-details/",
  contoller.newProductionRoundDetails.delete
);

//Order Details APIs
route.post("/api/order-details/", contoller.orderDetails.create);
route.get("/api/order-details/", contoller.orderDetails.find);
route.put("/api/order-details/", contoller.orderDetails.update);
route.delete("/api/order-details/", contoller.orderDetails.delete);

module.exports = route;
