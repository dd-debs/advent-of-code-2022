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

            //TODO: add some => includes and min and max comparisons
            const maxStart = Math.max(ranges[0][0], ranges[1][0]);
            const minEnd = Math.min(ranges[0][1], ranges[1][1]);

                if (maxStart <= minEnd) {
                    results.push(ranges)
                    console.log(ranges)
                }
                for (let result in results) {
                    if (result) {
                        console.count(result)
                    }
                }
            }
    })
}
findOverlaps()
