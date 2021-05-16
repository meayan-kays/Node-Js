var net = require('net');

const portNumber = process.argv[2];

function twoDigitsNumber(number) {
    return number < 10  ? '0' + number : number;
}

var server = net.createServer(function (socket) {
    var date = new Date();
    var year = date.getFullYear();
    var month = twoDigitsNumber(date.getMonth() + 1);
    var day = twoDigitsNumber(date.getDate());
    var hours = twoDigitsNumber(date.getHours());
    var minutes = twoDigitsNumber(date.getMinutes());

    var dateToString = year + '-' + month + '-' + day + ' ' + hours + ':' + minutes;
    socket.end(dateToString + '\n');
    
});

server.listen(portNumber);