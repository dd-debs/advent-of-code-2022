const fs = require('fs')

function findOverlaps() {
    fs.readFile('adv-12-04-input.txt', (err, data) => {
        const entries = data.toString()
        const array = entries.split(/\n/)
        let subArrays = []
        //structures data in arrays
        for (let i = 0; i<array.length; i++) {
            subArrays = array[i].split(',');

            let ranges = subArrays.map(range => range.split('-').map(Number))
            let results = []
                //checks if one range fully includes the other one
                if (ranges[0][0] >= ranges[1][0] && ranges[0][1] <= ranges[1][1] || ranges[1][0] >= ranges[0][0] && ranges[1][1] <= ranges[0][1]) {
                    results.push(ranges)
                }
                //counts which ranges include the other ones
                for (let result in results) {
                    if (result) {
                        console.count()
                    }
                }
            }
    })
}
findOverlaps()