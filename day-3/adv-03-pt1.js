function setPriorities() {
    const fs = require('fs')
    fs.readFile('adv-12-03-input.txt', (err, data) => {
        const entries = data.toString();
        const backpacks = entries.split(/\n/)
        let backpackFinal = []
        let firstCompartment = ""
        let secondCompartment = ""
        //console.log(backpacks)
        for (let backpack of backpacks) {
            firstCompartment = backpack.slice(0, Math.floor(backpack.length/2));
            secondCompartment = backpack.slice(Math.floor(backpack.length/2), backpack.length)
            backpackFinal.push(firstCompartment)
            backpackFinal.push(secondCompartment)
        }
        let partitions = []
        for (let i=0; i<backpackFinal.length;i+=2) {
            partitions.push(backpackFinal.slice(i,i+2))
        }
        //console.log(partitions);
        //loops through the sub-arrays
        for (let i=0; i<partitions.length; i++) {
            const innerArray = partitions[i].length;
            for (let j=0; j<innerArray; j++) {
                //TODO: loop through the elements of the arrays to find which letter is common & assign priority points (a-z -> 1-26 / A-Z -> 27-52)
                /*var cubes = [
                 [1, 2, 3],
                 [4, 5, 6],
                 [7, 8, 9],
                ];

                cubes.forEach(function each(item) {
                  if (Array.isArray(item)) {
                    // If is array, continue repeat loop
                    item.forEach(each);
                  } else {
                    console.log(item);
                  }
                });*/
            }
        }

    })
}
setPriorities()