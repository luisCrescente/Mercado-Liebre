const express = require("express");
const router = express.Router();
const mainController = require("../controllers/mainRouter");


router.get('/', mainController.index);

module.exports = router;