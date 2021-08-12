const express = require('express');
const route = express.Router()


const contoller = require('../controller/controller');


//Super Admin Category APIs
route.post('/api/categories',contoller.category.create);
route.get('/api/categories',contoller.category.find);
route.put('/api/categories/',contoller.category.update);
route.delete('/api/categories/',contoller.category.delete);

//Super Admin Metirial Code APIs
route.post('/api/meterial-code/',contoller.materialCode.create);
route.get('/api/meterial-code/',contoller.materialCode.find);
route.put('/api/meterial-code/',contoller.materialCode.update);
route.delete('/api/meterial-code/',contoller.materialCode.delete);

module.exports =route;