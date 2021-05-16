const fs = require('fs');

var filename = process.argv[2];

fs.readFile(filename, 'utf-8', function (error, data) {
    if(error){
        console.log(error)
    }
    console.log(data.split('\n').length - 1);   
})