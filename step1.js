const fs = require('fs')  // file system

function cat(path){  // path is the location of the file
    // req.fileRead(filename.txt, encoding, callback){
    fs.readFile(path, 'utf8', (err, data) =>{
        if(err){
            // either console log the err or exit the program with process.exit
            console.log(`No such file or directory ${path}, ${err}`);
            // process.kill(1);
            process.exit(1);
        }
        console.log(data);
    })
}

// process.argv is an object that contains 2 things-location of node and location of the file in your computer
cat(process.argv[2]);  // process.argv contains 2 things, first the location of the node and second the location of the local file

// in terminal do node step1.js one.txt