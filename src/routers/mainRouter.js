const express = require("express");
const router = express.Router();

// ************ Controller Require ************
const mainController = require("../controllers/mainRouter");

/*** GET ALL PRODUCTS ***/ 
router.get('/', mainController.index);

router.get('/search', mainController.search);

module.exports = router;