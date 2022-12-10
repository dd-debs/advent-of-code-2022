//imports text reader
const fs = require('fs')

//reads text and splits values into arrays according to gap paragraphs
//adds blank spaces as 0 calories
//adds all calories
function sumCalories() {
    fs.readFile("adv-12-01-input.txt", (err, data) => {
        const calories = data.toString().split(/\r?\n/)
        let elfCalories = 0
        const allCalories = []
        for (let calorie of calories) {
            if (calorie === "") {
                allCalories.push(elfCalories)
                elfCalories = 0
            } else {
                elfCalories += parseInt(calorie)
            }
        }
        //calculates max calories
        const maxCalories = Math.max(...allCalories)
        console.log(maxCalories)
    })
}

sumCalories()






