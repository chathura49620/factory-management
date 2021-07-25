const express = require('express');
const route = express.Router()


const contoller = require('../controller/controller');


//Super Admin Category APIs
route.post('/api/categories',contoller.category.create);
route.get('/api/categories',contoller.category.find);
route.put('/api/categories/:id',contoller.category.update);
route.delete('/api/categories/:id',contoller.category.delete);

module.exports =route;