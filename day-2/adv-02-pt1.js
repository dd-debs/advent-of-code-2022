const fs = require('fs')

fs.readFile('adv-12-02-input.txt', (err, data) => {
    const entries = data.toString();
    //deletes the space between the letters of each couplet
    const entriesWithoutSpace = entries.replace(/ /g, '');
    //creates one big array where each couplet is an element of the array
    const macroArray = entriesWithoutSpace.split(/\n/)
    console.log(macroArray);
})
