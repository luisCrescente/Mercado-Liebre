const path= require("path");

let usersControllers ={
    login:(req,res)=>{
        res.render("login");
    },
    register:(req,res)=>{
        res.render('register');
    }
};
module.exports = usersControllers;