const path = require("path");
const fs = require('fs');

const helpers = {
    readJson: function(archivoJson){
        let productsFilePath = fs.readFileSync(path.resolve(__dirname,`../data/${archivoJson}`));
        return JSON.parse(productsFilePath);
    },
    writeJson:(archivoJson,productsFilePath)=>{
        fs.writeFileSync(path.resolve(__dirname,`../data/${archivoJson}`), JSON.stringify(productsFilePath,null,4));

    },
    lastId:(archivoJson)=>{
        let last = 0;
        archivoJson.forEach(element => {
            if(last < element.id){
                last = element.id;
            };
        });
        return last;
    }
}

module.exports = helpers;