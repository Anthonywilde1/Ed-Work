// Complete the function rps(player1, player2) . The inputs player1 and player2 will both be strings representing 
//a move in the game rock, paper, scissors. The input could contain words with any case but will always be a valid 
//string and option. Your function should return a string telling the user who the winner was or if it was a draw. 

// Rules of the game

// Rock beats Scissor
// Paper beats Rock
// Scissor beats Paper
// In the case that both players choose the same option it is a draw

// Examples

// rps('rock', 'paper') => 'The winner is player 2'
// rps('Sissors', 'paper') => 'The winner is player 1'
// rps('paper', 'Paper') => 'It's a draw'

// Note that capital letters shouldn't make a difference to the output.

const rps = (player1, player2) => {
    player1 = player1.toLowerCase();
    player2 = player2.toLowerCase();

    if (player1 === player2) {
        return "its a draw";
    } else if ((player1 == "rock" && player2 == "scissors") || (player1 == "scissors" && player2 == "paper") || (player1 == "paper" && player2 == "rock")) { 
        return "player 1 is the winner"
    } else {
        return "Player 2 is the winner"
    }
       
};


 // If they chose the same move we can return a draw
    if (player1 === player2) return "It's a draw";
    // Define our winner output string
    let output = 'The winner is Player ';
    // Check to see if player2 beats player1
    switch(player1) {
        case 'rock':
            if(player2 == 'paper') return output + '2';
            break;
        case 'paper':
            if(player2 == 'scissors') return output + '2';
            break;
        case 'scissors':
            if(player2 == 'rock') return output + '2';
            break;
    }
    // If we got here then player1 wins
    return output + '1';



// case valueN Optional
//A case clause used to match against expression.
//If the expression matches the specified valueN, the statements inside the case
//clause are executed until either the end of the switch statement or a break.
//Dont't change this!
module.exports = rps;