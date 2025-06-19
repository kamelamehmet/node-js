const fs = require('fs');
const path = require('path');
const read = async() => {


const result = fs.readFileSync(path.join(__dirname, 'package.json'), 'utf8' );
return result;  
}
read().then(f=>console.log(f))
console.log("hi");
read()
