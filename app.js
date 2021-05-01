//requerimos express
const express = require('express');
const { get } = require('http');
const app = express();

//requerimos path 
const path = require('path');

//configuracion de carpetas estaticas
const publicPath = path.resolve(__dirname,'./public');
app.use(express.static(publicPath));

//corre el servidor en el puerto 3001
app.listen(process.env.PORT || '3001',()=>{
    console.log('Estoy corriendo en el puerto 3001');
});


app.get('/',(req,res)=>{
res.sendFile(path.resolve(__dirname,'./views/home.html'));
});

app.get('/login',(req,res)=>{
    res.sendFile(path.resolve(__dirname, 'views/login.html'));
});

app.get('/register',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'views/register.html'));
});



