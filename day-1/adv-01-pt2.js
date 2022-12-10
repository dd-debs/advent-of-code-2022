const fs = require('fs')

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
        // sorts arrays in desc order
        // gets top 3 elf groups with max number of calories
        allCalories.sort(function (a, b) {
            return a - b;
        });
        let top3 = allCalories.slice(-3);
        //sums top 3 arrays
        const sum = top3.reduce((partialSum, a) => partialSum + a, 0);
        console.log(sum)
    });
};

sumCalories();

