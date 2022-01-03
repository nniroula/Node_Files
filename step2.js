/* step 2 */
// const { cat } = require('./step1');
const step1Data = require('./step1');
const axios = require('axios');

async function webCat(URL){
    try{
    response = await axios.get(URL);
    console.log(response.data);
    }catch(e){
        console.log(`Error ${URL}, ${e}`);
        process.exit(1);
    }
}
// now call cat() from step1.js
// ge the path for the file in step1.js
let filePath = process.argv[2]; // this gives a route for text(or any) file
// if first four characters of filePath is 'http', then it is a url
if(filePath.slice(0, 4) === 'http'){
    webCat(filePath);
}
else{
    step1Data.cat(filePath);
}
