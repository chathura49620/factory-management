const express = require("express");
const route = express.Router();

const contoller = require("../controller/controller");

//Super Admin Category APIs
route.post("/api/categories", contoller.category.create);
route.get("/api/categories", contoller.category.find);
route.put("/api/categories/", contoller.category.update);
route.delete("/api/categories/", contoller.category.delete);


// Super Admin Product Code APIs
<<<<<<< HEAD
route.post("/api/product-code/", contoller.productcode.create);
route.get("/api/product-code/", contoller.productcode.find);
route.put("/api/product-code/", contoller.productcode.update);
route.delete("/api/product-code/", contoller.productcode.delete);
=======
route.post('/api/product-code/',contoller.productcode.create);
route.get('/api/product-code/',contoller.productcode.find);
route.put('/api/product-code/',contoller.productcode.update);
route.delete('/api/product-code/',contoller.productcode.delete);




//Financial Team Member Bill Type APIs
route.post('/api/bill-type/',contoller.billType.create);
route.get('/api/bill-type/',contoller.billType.find);
route.put('/api/bill-type/',contoller.billType.update);
route.delete('/api/bill-type/',contoller.billType.delete);


// Financial Team Member Bills APIs
route.post('/api/bills/',contoller.bills.create);
route.get('/api/bills/',contoller.bills.find);
route.put('/api/bills/',contoller.bills.update);
route.delete('/api/bills/',contoller.bills.delete);

// Financial Team Member Bills APIs
route.post('/api/material-cost/',contoller.materialCost.create);
route.get('/api/material-cost/',contoller.materialCost.find);
route.put('/api/material-cost/',contoller.materialCost.update);
route.delete('/api/material-cost/',contoller.materialCost.delete);

// Financial Team Member Temp Salaries APIs
route.post('/api/temp-salaries/',contoller.tempSalaries.create);
route.get('/api/temp-salaries/',contoller.tempSalaries.find);
   

//Super Admin User Role APIs
route.get('/api/user-roles/',contoller.userRole.find);
route.post('/api/user-roles/',contoller.userRole.create);
>>>>>>> IT19048338



//login APIs
<<<<<<< HEAD
route.get("/api/login/", contoller.login.find);

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

//previous Production Round Details APIs

route.post(
  "/api/prevProRound-details/",
  contoller.previousProductionRoundDetails.create
);
route.get(
  "/api/prevProRound-details/",
  contoller.previousProductionRoundDetails.find
);
route.put(
  "/api/prevProRound-details/",
  contoller.previousProductionRoundDetails.update
);
route.delete(
  "/api/prevProRound-details/",
  contoller.previousProductionRoundDetails.delete
);

//Order Details APIs
=======
route.get('/api/login/',contoller.login.find);

//add user route
route.post('/api/user/',contoller.user.create);

//Super Admin Factory Details APIs
route.post('/api/factory-details/',contoller.factoryDetails.create);
route.get('/api/factory-details/',contoller.factoryDetails.find);
route.put('/api/factory-details/',contoller.factoryDetails.update);
route.delete('/api/factory-details/',contoller.factoryDetails.delete);

<<<<<<< HEAD
>>>>>>> IT19048338

route.post("/api/proStock-details/", contoller.productStockDetails.create);
route.get("/api/proStock-details/", contoller.productStockDetails.find);
route.put("/api/proStock-details/", contoller.productStockDetails.update);
route.delete("/api/proStock-details/", contoller.productStockDetails.delete);

// //Order Details APIs

route.post("/api/order-details/", contoller.orderDetails.create);
route.get("/api/order-details/", contoller.orderDetails.find);
route.put("/update/order", contoller.orderDetails.update);
route.delete("/api/order-details/", contoller.orderDetails.delete);
route.put("/api/order-details", contoller.wholesaleBuyerOrderDetails.update);

//Feedback Details APIs
route.post("/api/feedback-details/", contoller.feedbackDetails.create);
route.get("/apifeedback-details/", contoller.feedbackDetails.find);

//Return An Order APIs
route.post("/api/return-order-details/", contoller.returnOrderDetails.create);

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
=======
//Employee Leave Details APIs
route.post('/api/leave-details/',contoller.leaveDetails.create);
route.get('/api/leave-details/',contoller.leaveDetails.find);
route.put('/api/leave-details/',contoller.leaveDetails.update);
route.delete('/api/leave-details/',contoller.leaveDetails.delete); 

//employee assignment APIs
route.post('/api/assignment-details/',contoller.assignmentDetails.create);
route.get('/api/assignment-details/',contoller.assignmentDetails.find);
route.put('/api/assignment-details/',contoller.assignmentDetails.update);
route.delete('/api/assignment-details/',contoller.assignmentDetails.delete);

//employee payment APIs
route.post('/api/payment-details/',contoller.paymentDetails.create);
route.get('/api/payment-details/',contoller.paymentDetails.find);
route.put('/api/payment-details/',contoller.paymentDetails.update);
route.delete('/api/payment-details/',contoller.paymentDetails.delete);




>>>>>>> IT19189086
module.exports = route;
