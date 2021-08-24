const express = require('express');
const route = express.Router()


const contoller = require('../controller/controller');


//Super Admin Category APIs
route.post('/api/categories',contoller.category.create);
route.get('/api/categories',contoller.category.find);
route.put('/api/categories/',contoller.category.update);
route.delete('/api/categories/',contoller.category.delete);

// Super Admin Metirial Code APIs
route.post('/api/meterial-code/',contoller.materialCode.create);
route.get('/api/meterial-code/',contoller.materialCode.find);
route.put('/api/meterial-code/',contoller.materialCode.update);
route.delete('/api/meterial-code/',contoller.materialCode.delete);

// Super Admin Product Code APIs
route.post('/api/product-code/',contoller.productcode.create);
route.get('/api/product-code/',contoller.productcode.find);
route.put('/api/product-code/',contoller.productcode.update);
route.delete('/api/product-code/',contoller.productcode.delete);

//Super Admin Metirial Code APIs
route.get('/api/user-roles/',contoller.userRole.find);
route.post('/api/user-roles/',contoller.userRole.create);


//Super Admin Factory Details APIs
route.post('/api/factory-details/',contoller.factoryDetails.create);
route.get('/api/factory-details/',contoller.factoryDetails.find);
route.put('/api/factory-details/',contoller.factoryDetails.update);
route.delete('/api/factory-details/',contoller.factoryDetails.delete);

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

module.exports = route;