const route = require('express').Router()
const contoller = require('../Contoller/controller')
const store = require('../middleware/multer')

// routes 
route.get('/', contoller.home);                     // max limit set to 12
route.post('/uploadmultiple',store.array('images',12),contoller.upload ) //array is used for multiple images

module.exports = route;