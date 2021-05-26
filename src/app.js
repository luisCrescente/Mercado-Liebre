
const express = require('express');//requerimos express.
const app = express();
const path = require('path');//requerimos path .
const mainRouter = require("../src/routers/mainRouter");
const productsRouter = require("../src/routers/productsRouter");
const usersRouter = require("../src/routers/users");

const publicPath = path.resolve(__dirname,'../public');//configuracion de carpetas estaticas.
app.use(express.static(publicPath));

app.set("view engine", "ejs"); // configuracion de ejs.
app.set('views', path.resolve(__dirname, 'views'));


app.use(express.urlencoded({extended:false}));
app.use(express.json()); //captura la informacion de formularios

app.use("/",mainRouter);
app.use("/products",productsRouter);
app.use("/users",usersRouter);

app.listen(process.env.PORT || '3001',()=>{
    console.log('Estoy corriendo en el puerto 3001');
});//corre en el puerto 3001.





