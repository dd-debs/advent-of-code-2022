function setPriorities() {
    const fs = require('fs')
    fs.readFile('adv-12-03-input.txt', (err, data) => {
        const entries = data.toString();
        const backpacks = entries.split(/\n/)
        const groupItems = 3;
        //forms groups of 3 elements in sub-arrays
        const backpackGroups = backpacks.reduce((resultArray, item, index) => {
            const groupIndex = Math.floor(index / groupItems);
            //empty array if partition does not work
            if (!resultArray[groupIndex]) {
                resultArray[groupIndex] = []
            }
            resultArray[groupIndex].push(item);
            return resultArray
        }, []);

        //defines alphabet letters priorities
        let alphabet = [];
        for (let i=0; i<26; i++) {
            alphabet.push({letter:String.fromCharCode(i+97), priority: i+1});
            alphabet.push({letter: String.fromCharCode(i+65), priority: i+27});
        }

        let commonLetters = [];
        let resultsArray = [];

        //separates the letters of each compartment
        for (let i = 0; i < backpackGroups.length; i++) {
            const innerArray = backpackGroups[i];
            const letters1 = innerArray[0].split('');
            const letters2 = innerArray[1].split('');
            const letters3 = innerArray[2].split('');

            //checks if the three elements of each inner array have letters in common (!== index -1)
            for (let j = 0; j<letters1.length; j++) {
                if (letters2.indexOf(letters1[j]) !== -1 && letters3.indexOf(letters1[j]) !== -1) {
                    commonLetters.push(letters1[j]);
                    break;
                }
            }
            //creates an array with common letters and respective priorities taken from the alphabet array
            resultsArray = commonLetters.map(letter => {
                let alphabetObject = alphabet.find(item => item.letter === letter);
                return {
                    letter: letter,
                    priority: alphabetObject.priority
                }
            })
        }
        //gets the sum of priorities
        const sumOfPriorities = resultsArray.reduce((total, obj) => {
            return total + obj.priority
        },0);
        console.log(sumOfPriorities);
    });
}
setPriorities();