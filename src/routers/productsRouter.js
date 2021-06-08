const express = require("express");
const router = express.Router();
const path = require('path');

// ************ Controller Require ************
const controllerProducts = require("../controllers/controllerProducts");

/*** GET ALL PRODUCTS ***/ 
router.get("/", controllerProducts.index); 

// /*** GET ONE PRODUCT ***/ 
 router.get('/detail/:id/', controllerProducts.detail); 


module.exports = router;