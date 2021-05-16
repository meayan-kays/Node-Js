var  fs = require('fs');
var path = require('path');

module.exports = function (dir, ext, callback) {
    ext = '.' + ext;
    fs.readdir(dir, function (err, files) {
        if(err){
            callback(err, null)
        }
        else {
            var filteredList = [];
            files.forEach(function (file) {
                if (path.extname(file) == ext) {
                    filteredList.push(file)
                }
            });
            callback(null, filteredList)
        }
    });
}