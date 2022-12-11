function playGame() {
    const fs = require('fs')
    fs.readFile('adv-12-02-input.txt', (err, data) => {
    const entries = data.toString();
    //deletes the space between the letters of each couplet
    const entriesWithoutSpace = entries.replace(/ /g, '');
    //creates one big array where each couplet is an element of the array
    const rounds = entriesWithoutSpace.split(/\n/)
    let totalScore = []

        for (let round of rounds) {
            let shapeScore = 0;
            let outcomeScore = 0;
            let totalRoundScore = 0;
            let opponentMove = round.charAt(0)
            let myMove = round.charAt(1)
            if (opponentMove === 'A' && myMove === 'X') {
                shapeScore += 1;
                outcomeScore += 3;
                totalRoundScore++
            } else if (opponentMove === 'A' && myMove === 'Y') {
                shapeScore += 2;
                outcomeScore += 6;
                totalRoundScore++
            } else if (opponentMove === 'A' && myMove === 'Z') {
                shapeScore += 3;
                outcomeScore += 0;
                totalRoundScore++
            }
            if (opponentMove === 'B' && myMove === 'X') {
                shapeScore += 1;
                outcomeScore += 0;
                totalRoundScore++
            } else if (opponentMove === 'B' && myMove === 'Y') {
                shapeScore += 2;
                outcomeScore += 3;
                totalRoundScore++
            } else if (opponentMove === 'B' && myMove === 'Z') {
                shapeScore += 3;
                outcomeScore += 6;
                totalRoundScore++
            }
            if (opponentMove === 'C' && myMove === 'X') {
                shapeScore += 1;
                outcomeScore += 6;
                totalRoundScore++
            } else if (opponentMove === 'C' && myMove === 'Y') {
                shapeScore += 2;
                outcomeScore += 0;
                totalRoundScore++
            } else if (opponentMove === 'C' && myMove === 'Z') {
                shapeScore += 3;
                outcomeScore += 3;
                totalRoundScore++
            }
            totalRoundScore = shapeScore + outcomeScore

            totalScore.push(totalRoundScore)
        }
        //sums the scores from each round to find the total -> 13809
        const sum = totalScore.reduce((partialSum, a) => partialSum + a, 0);
        console.log(sum);
    })
}

playGame();
