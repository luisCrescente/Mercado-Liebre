const fs = require('fs');
const path = require('path');

 const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
 const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8', null, 4));



const controller = {
	// Root - Show all products
	index: (req, res) => {
		res.render('products', {products})
	},
	detail: (req, res) => {
	 	let idProduct = req.params.id;
	 	let product =products.find(product => product.id == idProduct);
		
		res.render('detail',{product});
	 }
}


module.exports = controller;