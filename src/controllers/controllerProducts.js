const fs = require('fs');
const path = require('path');

const{readJson,writeJson,lastId} = require('./helpers');
const productsJSON = readJson('productsDataBase.json');


const controller = {

	//  Root - Show all products
	index: (req, res) => {
		let products = productsJSON;
		res.render('products', {products})
	},

	// Detail - Detail from one product
		detail: (req, res) => {
		let idProduct = req.params.id;
		let product =productsJSON.find(product => product.id == idProduct);
		
		res.render('detail',{product});
	},

	// Create - Form to create
		create:(req,res) =>{
		res.render('createProducts');
	},

	// Create -  Method to store
	store:(req,res)=>{
	let newProduct ={
		id: lastId(productsJSON) +1,
		...req.body,
		image:req.file.filename
		}
		productsJSON.push(newProduct);
		writeJson('productsDataBase.json',productsJSON);
		res.redirect('/products');
	},

	// Update - Form to edit
	edit:(req,res)=>{
		let idProduct = req.params.id;
		let productEdit = productsJSON.find(product => product.id == idProduct);

		res.render('editProducts',{productEdit});
		},
		
	// Update - Method to update
	update:(req,res) =>{
		let idProduct = req.params.id;

		productsJSON.forEach(product =>{
			if( product.id == idProduct){
				product.name = req.body.name;
				product.price = req.body.price;
				//product.discount= req.body.discount;
				product.category= req.body.category;
				product.description= req.body.description;
				product.image = req.file.filename
			};
		});
		writeJson('productsDataBase.json',productsJSON)

		let product =productsJSON.find(product => product.id == idProduct)
		res.render('detail',{product});
	},

	// Delete Product
	destroy:(req,res)=>{

		let idProduct = req.params.id;
		
		let newList = productsJSON.filter(product => product.id != idProduct);
		
	
		writeJson('productsDataBase.json',newList);
		
		return res.redirect('/products');
	}
	
}


module.exports = controller;