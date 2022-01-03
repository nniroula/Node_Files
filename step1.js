const fs = require('fs')  // file system

// step 1

function cat(path){  // path is the location of the file
    // req.fileRead(filename.txt, encoding, callback){
    fs.readFile(path, 'utf8', (err, data) =>{
        if(err){
            // either console log the err or exit the program with process.exit
            console.log(`No such file or directory ${path}, ${err}`);
            // process.kill(1);
            process.exit(1);
        }
        console.log(data);  // no parsing of data is needed
        // return data;
    })
}

// process.argv is an object that contains 2 things-location of node and location of the file in your computer
let value = cat(process.argv[2]);  // process.argv contains 2 things, first the location of the node and second the location of the local file
console.log(value);
// in terminal do node step1.js one.txt


/* To import this function in step2.js file */
module.exports = {
    cat: cat
    // value: value
}
