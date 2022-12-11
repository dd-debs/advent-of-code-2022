function setPriorities() {
    const fs = require('fs')
    fs.readFile('adv-12-03-input.txt', (err, data) => {
        const entries = data.toString();
        const backpacks = entries.split(/\n/)
        //console.log(backpacks)
        for (let backpack of backpacks) {
            let firstCompartment = backpack.slice(0, Math.floor(backpack.length/2));
            let secondCompartment = backpack.slice(Math.floor(backpack.length/2), backpack.length)
            let backpackFinal = []
            backpackFinal.push(firstCompartment)
            backpackFinal.push(secondCompartment)
            //console.log(backpackFinal)
            //TODO: loop through the elements of the arrays to find which letter is common & assign priority points (a-z -> 1-26 / A-Z -> 27-52)
        }

    })
}
setPriorities()