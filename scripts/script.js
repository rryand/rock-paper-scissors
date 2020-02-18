let playerScore = 0;
let computerScore = 0;
let gameInit= 0;
const textArea = document.querySelector('#text-area');
const buttons = document.querySelectorAll('button');
const choiceText = document.getElementById('choice-text');

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        game(e.target.id);
    });
});

function computerPlay() {
    let randomNum = Math.floor(Math.random() * 3) + 1;
    let response = (randomNum == 1) ? 'rock' :
        (randomNum == 2) ? 'paper' : 'scissors';
    return response;
}

function playRound(playerSelection, computerSelection) {
    choiceText.textContent = `> Player threw ${playerSelection}! Computer chose ${computerSelection}!`;

    if (playerSelection == computerSelection) return `It's a draw! Both players threw ${computerSelection}!`;
    else if (playerSelection == 'rock') {
        switch (computerSelection) {
            case 'paper':
            computerScore++;
            return 'You lose! Paper wraps rock.';

            case 'scissors':
            playerScore++;
            return 'You win! Rock beats scissors';

            default:
            return `ERROR`;
        }
    } else if (playerSelection == 'paper') {
        switch (computerSelection) {
            case 'rock':
            playerScore++;
            return 'You win! Paper wraps rock.';

            case 'scissors':
            computerScore++;
            return 'You lose! Scissor cuts paper';

            default:
            return `ERROR`;
        }
    } else if (playerSelection == 'scissors') {
        switch (computerSelection) {
            case 'rock':
            computerScore++;
            return 'You lose! Rock beats scissors';

            case 'paper':
            playerScore++;
            return 'You win! Scissor cuts paper';

            default:
            return `ERROR`;
        }
    }
}

function game(playerSelection) {
    let result = playRound(playerSelection, computerPlay());

    if (gameInit === 0) {
        let resultText = document.createElement('p');
        resultText.id = 'result';
        textArea.appendChild(resultText);

        let gameScore = document.createElement('p');
        gameScore.id = 'game-score';
        textArea.appendChild(gameScore);
        gameInit++;
    }
    let newResultText = document.getElementById('result');
    let newGameScore = document.getElementById('game-score');
    newResultText.textContent = '> ' + result;
    newGameScore.textContent = `Player: ${playerScore} | PC: ${computerScore}`;
    if (playerScore === 5 || computerScore === 5) {
        let finalResult = (playerScore > computerScore) ? 'Congrats! You win!' : 
        'You lose. Better luck next time!';
        newGameScore.textContent = `Player: ${playerScore} | PC: ${computerScore} | ${finalResult}`;
        playerScore = 0;
        computerScore = 0;
    }
}