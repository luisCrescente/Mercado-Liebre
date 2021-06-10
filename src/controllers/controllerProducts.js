const fs = require('fs');
const path = require('path');

 const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
 const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8', null, 4));

const lastId = ()=>{
	let last = 0;
	products.forEach( product => {
		if(last < product.id){
			lsat = product.id;
		};
	});
	return last;
}


const controller = {
	// Root - Show all products
	index: (req, res) => {
		res.render('products', {products})
	},
	detail: (req, res) => {
	 	let idProduct = req.params.id;
	 	let product =products.find(product => product.id == idProduct);
		
		res.render('detail',{product});
	},
	create:(req,res) =>{
		res.render('createProducts');
	},
	store:(req,res)=>{
		let product ={
			id: lastId,
			...req.body
		};
		products.push(product);

		let productsJson = JSON.stringify(products, null, 4);
		fs.writeFileSync(path.resolve(__dirname, '../data/productsDataBase.json'),productsJson);
		
		return res.redirect('/products');
	},
	edit:(req,res)=>{

	},
	update:(req,res) =>{

	}
}


module.exports = controller;