const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersControllers");

// router.get('/login',(req,res)=>{
//     res.sendFile(path.resolve(__dirname, 'views/login.html'));
// });

// router.get('/register',(req,res)=>{
//     res.sendFile(path.resolve(__dirname,'views/register.html'));
// });

module.exports = router;