const express = require("express");
const route = express.Router();

const contoller = require("../controller/controller");

//Super Admin Category APIs
route.post("/api/categories", contoller.category.create);
route.get("/api/categories", contoller.category.find);
route.put("/api/categories/", contoller.category.update);
route.delete("/api/categories/", contoller.category.delete);


// Super Admin Product Code APIs
route.post("/api/product-code/", contoller.productcode.create);
route.get("/api/product-code/", contoller.productcode.find);
route.put("/api/product-code/", contoller.productcode.update);
route.delete("/api/product-code/", contoller.productcode.delete);

//login APIs
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

module.exports = route;
