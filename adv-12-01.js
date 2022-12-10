const fs = require('fs')

fs.readFile('adv-12-01-input.txt', readFile)

function readFile(err, data) {
    if (err) throw err;
    return data.toString();
}








