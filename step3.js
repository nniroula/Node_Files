// copy over step2.js code, for this do module.exports in step2.js
// const step2Code = require('/file')

/* step 2 */
// const { cat } = require('./step1');
const step1Data = require('./step1');
const axios = require('axios');
const fs = require('fs');

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

// step 3

function output(content, outputFile){
    if(outputFile){
        fs.writeFile(outputFile, 'utf8', function(error){
            if(error){
                console.log(`Does not write to ${outputFile}, ${error}`);
                process.exit();
            }
        });
    }else{
        console.log(content);
    }
}
// call output function inside cat function so that this code may work

// commandline work
let pathToFile;
let out;

if(process.argv[2] === '--out'){
    out = process.argv[3];
    pathToFile = process.argv[4];
}
else{
    pathToFile = process.argv[2];
}

// find out if input contains http
if(pathToFile.slice(0, 4) === 'http'){
    webCat(pathToFile, out);
}else{
    step1Data.cat(pathToFile, out);
}