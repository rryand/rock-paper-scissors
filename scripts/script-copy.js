// rock-paper-scissors javascript code before DOM manipulation

let playerScore = 0;
let computerScore = 0;
function computerPlay() {
    let randomNum = Math.floor(Math.random() * 3) + 1;
    let response = (randomNum == 1) ? 'rock' :
        (randomNum == 2) ? 'paper' :
        (randomNum == 3) ? 'scissors' :
        `Surprise! It's a gun! Mwahahaha!!`; // issa joke
    return response;
}

function playRound(playerSelection, computerSelection) {
    console.log(`Player threw ${playerSelection}!`);
    console.log(`Computer chose ${computerSelection}!`);

    if (playerSelection == computerSelection) return `It's a draw! Both players threw ${computerSelection}!`;
    else if (playerSelection == 'rock') {
        switch (computerSelection) {
            case 'paper':
            computerScore++;
            return 'You lose! Paper wraps rock.';
            break;

            case 'scissors':
            playerScore++;
            return 'You win! Rock beats scissors';
            break;

            default:
            return `Oh no! It's a gun!`;
        }
    } else if (playerSelection == 'paper') {
        switch (computerSelection) {
            case 'rock':
            playerScore++;
            return 'You win! Paper wraps rock.';
            break;

            case 'scissors':
            computerScore++;
            return 'You lose! Scissor cuts paper';
            break;

            default:
            return `Oh no! It's a gun!`;
        }
    } else if (playerSelection == 'scissors') {
        switch (computerSelection) {
            case 'rock':
            computerScore++;
            return 'You lose! Rock beats scissors';
            break;

            case 'paper':
            playerScore++;
            return 'You win! Scissor cuts paper';
            break;

            default:
            return `Oh no! It's a gun!`;
        }
    }
}

function game() {
    let result;
    for (let i = 0; i < 5; i++) {
        let playerChoice = prompt('Choose: Rock, paper, or scissors?');
        let playerSelection = playerChoice.toLowerCase();

        function errorDetect() {
            return !playerSelection || (playerSelection != 'rock' && playerSelection != 'paper' && playerSelection != 'scissors');
        }

        while (errorDetect()) {
            playerSelection = prompt('Please choose! Rock, paper, or scissors?');
            errorDetect();
        }
        result = playRound(playerSelection, computerPlay());
        console.log(result);
        console.log(`Player:    ${playerScore}`);
        console.log(`Computer:  ${computerScore}`);
    }
    return (playerScore > computerScore) ? 'Congrats! You win!' :
    (playerScore < computerScore) ? 'You lose. Better luck next time!' :
    `It's a draw!`;
}

console.log(game());