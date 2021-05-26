const path = require("path");

const products = "" ;

let mainController ={
    index: (req,res)=>{
    res.render('home', /*{products}*/);
    },
    search: (req,res) =>{
       /* let buscado = req.query.search;
        let productsNew = [];
		for (let i = 0; i < products.length; i++){
			if(products[i].name.includes(buscado)){
				productsNew.push(products[i]);
			}
		}*/
		
		res.render('results',/*{'products':productsNew}*/);
    }

    
};

module.exports = mainController;