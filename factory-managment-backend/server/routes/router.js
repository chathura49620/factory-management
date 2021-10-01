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



//login APIs
route.get('/api/login/',contoller.login.find);

//add user route
route.post('/api/user/',contoller.user.create);

//Super Admin Factory Details APIs
route.post('/api/factory-details/',contoller.factoryDetails.create);
route.get('/api/factory-details/',contoller.factoryDetails.find);
route.put('/api/factory-details/',contoller.factoryDetails.update);
route.delete('/api/factory-details/',contoller.factoryDetails.delete);


module.exports =route;
