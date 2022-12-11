function playGame() {
    const fs = require('fs')
    fs.readFile('adv-12-02-input.txt', (err, data) => {
        const entries = data.toString();
        //deletes the space between the letters of each couplet
        const entriesWithoutSpace = entries.replace(/ /g, '');
        //creates one big array where each couplet is an element of the array
        const rounds = entriesWithoutSpace.split(/\n/)
        let totalScore = []
        //game logic changes -> second char is expected result (x=lose, y=draw, z=win)
        for (let round of rounds) {
            let shapeScore = 0;
            let outcomeScore = 0;
            let totalRoundScore = 0;
            let opponentMove = round.charAt(0)
            let result = round.charAt(1)
            if (opponentMove === 'A' && result === 'X') {
                shapeScore += 3;
                outcomeScore += 0;
                totalRoundScore++
            } else if (opponentMove === 'A' && result === 'Y') {
                shapeScore += 1;
                outcomeScore += 3;
                totalRoundScore++
            } else if (opponentMove === 'A' && result === 'Z') {
                shapeScore += 2;
                outcomeScore += 6;
                totalRoundScore++
            }
            if (opponentMove === 'B' && result === 'X') {
                shapeScore += 1;
                outcomeScore += 0;
                totalRoundScore++
            } else if (opponentMove === 'B' && result === 'Y') {
                shapeScore += 2;
                outcomeScore += 3;
                totalRoundScore++
            } else if (opponentMove === 'B' && result === 'Z') {
                shapeScore += 3;
                outcomeScore += 6;
                totalRoundScore++
            }
            if (opponentMove === 'C' && result === 'X') {
                shapeScore += 2;
                outcomeScore += 0;
                totalRoundScore++
            } else if (opponentMove === 'C' && result === 'Y') {
                shapeScore += 3;
                outcomeScore += 3;
                totalRoundScore++
            } else if (opponentMove === 'C' && result === 'Z') {
                shapeScore += 1;
                outcomeScore += 6;
                totalRoundScore++
            }
            totalRoundScore = shapeScore + outcomeScore

            totalScore.push(totalRoundScore)
        }
        //sums the scores from each round to find the total -> 12316
        const sum = totalScore.reduce((partialSum, a) => partialSum + a, 0);
        console.log(sum);
    })
}

playGame();

