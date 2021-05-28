
const express = require('express');//requerimos express.
const app = express();
const path = require('path');//requerimos path .
const methodOverride =  require('method-override');// Pasar poder usar los métodos PUT y DELETE

const publicPath = path.resolve(__dirname,'../public');//configuracion de carpetas estaticas.
app.use(express.static(publicPath));

app.set("view engine", "ejs"); // configuracion de ejs.
app.set('views', path.resolve(__dirname, 'views'));

app.use(methodOverride('_method')); // Pasar poder pisar el method="POST" en el formulario por PUT y DELETE

app.use(express.urlencoded({extended:false}));
app.use(express.json()); //captura la informacion de formularios


// ************ Route System require and use() ************
const mainRouter = require("./routers/mainRouter");
const productsRouter = require("./routers/productsRouter");
const usersRouter = require("./routers/users");

app.use("/",mainRouter);
app.use("/products",productsRouter);
app.use("/users",usersRouter);

app.listen(process.env.PORT || '3001',()=>{
    console.log('Estoy corriendo en el puerto 3001');
});//corre en el puerto 3001.





