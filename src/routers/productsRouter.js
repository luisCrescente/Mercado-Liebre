const express = require("express");
const router = express.Router();
const path = require('path');



const upload = require('../middleware/multer');

// ************ Controller Require ************
const controllerProducts = require("../controllers/controllerProducts");

/*** GET ALL PRODUCTS ***/
router.get("/", controllerProducts.index);

/*** GET ONE PRODUCT ***/
router.get('/detail/:id/', controllerProducts.detail);

/*** CREATE ONE PRODUCT ***/
router.get('/create', controllerProducts.create);
router.post('/', upload.single('imgP'), controllerProducts.store);

/*** EDIT ONE PRODUCT ***/
router.get('/:id/edit/', controllerProducts.edit);
router.put('/edit/:id', controllerProducts.update);

// /*** DELETE ONE PRODUCT***/ 
router.delete('/:id', controllerProducts.destroy);


module.exports = router;