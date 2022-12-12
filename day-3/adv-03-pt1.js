function setPriorities() {
    const fs = require('fs')
    fs.readFile('adv-12-03-input.txt', (err, data) => {
        const entries = data.toString();
        const backpacks = entries.split(/\n/)
        let backpackFinal = [];
        let partitions = [];

        let firstCompartment = "";
        let secondCompartment = "";
        //divides each string into two to get the equal compartments of each backpack
        for (let backpack of backpacks) {
            firstCompartment = backpack.slice(0, Math.floor(backpack.length/2));
            secondCompartment = backpack.slice(Math.floor(backpack.length/2), backpack.length)
            backpackFinal.push(firstCompartment)
            backpackFinal.push(secondCompartment)
        }

        //creates a multidimensional array with an outer array and multiple inner arrays, each with the two comps of each backpack
        for (let i=0; i<backpackFinal.length;i+=2) {
            partitions.push(backpackFinal.slice(i,i+2))
        }

        //defines alphabet letters priorities
        let alphabet = [];
        for (let i=0; i<26; i++) {
            alphabet.push({letter:String.fromCharCode(i+97), priority: i+1});
            alphabet.push({letter: String.fromCharCode(i+65), priority: i+27});
        }

        let commonLetters = []

        //separates the letters of each compartment
        for (let i=0; i<partitions.length; i++) {
            const innerArray = partitions[i];
            const letters1 = innerArray[0].split('');
            const letters2 = innerArray[1].split('');
            //checks if the two elements of each inner array have letters in common (!== index -1)
            for (let j = 0; j<letters1.length; j++) {
                if (letters2.indexOf(letters1[j]) !== -1) {
                    commonLetters.push(letters1[j]);
                    break;
                }
            }
        }
        //creates an array with common letters and respective priorities taken from the alphabet array
        let resultsArray = commonLetters.map(letter => {
            let alphabetObject = alphabet.find(item => item.letter === letter);
            return {
                letter: letter,
                priority: alphabetObject.priority
            }
        });
        //sums the priorities of the common letters to get the final result -> 8153
        const sumOfPriorities = resultsArray.reduce((total, obj) => {
            return total + obj.priority
        },0);
        console.log(sumOfPriorities);
    });
}
setPriorities();

