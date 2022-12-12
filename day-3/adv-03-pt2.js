function setPriorities() {
    const fs = require('fs')
    fs.readFile('adv-12-03-input.txt', (err, data) => {
        const entries = data.toString();
        const backpacks = entries.split(/\n/)
        //console.log(backpacks)
        //let backpackFinal = [];
        //let partitions = [];
        const groupItems = 3;

        const backpackGroups = backpacks.reduce((resultArray, item, index) => {
            const groupIndex = Math.floor(index / groupItems);
            if (!resultArray[groupIndex]) {
                resultArray[groupIndex] = []
            }
            resultArray[groupIndex].push(item)
            return resultArray
        }, [])

        let commonLetters = new Set();
        let letters1;
        let letters2;
        let letters3;
        let innerArray;

        //separates the letters of each compartment
        for (let i = 0; i < backpackGroups.length; i++) {
            innerArray = backpackGroups[i];
            letters1 = innerArray[0].split("");
            letters2 = innerArray[1].split("");
            letters3 = innerArray[2].split("");

            //checks if the three elements of each inner array have letters in common (!== index -1)
            for (let j = 0; j < letters1.length; j++) {
                for (let k = 0; k < letters2.length; k++) {
                    for (let l = 0; l < letters3.length; l++) {
                        if (letters1[j].includes(letters2[k]) && letters2[k].includes(letters3[l])) {
                            commonLetters.add(letters2[k])
                        }
                    }
                }
            }
        }
        console.log(commonLetters);
    })
}
setPriorities();