/**
 * PHASE 1: Rock Paper Scissors
 *
 * Follow the steps below to build your game logic!
 */

// 1. Initialize Scores (Player and Computer)
let playerScore = 0;
let computerScore = 0;

// 2. Select DOM Elements (Player Score, Computer Score, Message, Reset Button, Choice Buttons)
const playerScoreSpan = document.getElementById('player-score');
const computerScoreSpan = document.getElementById('computer-score');
const messageEl = document.getElementById('message');
const resetBtn = document.getElementById('reset-btn');
const choiceButtons = document.querySelectorAll('.choice-btn');

// 3. Define Game Choices (Rock, Paper, Scissors)
const gameChoices = ['rock', 'paper', 'scissors'];
const choiceEmojis = {
    'rock': '🪨',
    'paper': '📄',
    'scissors': '✂️'
};

// 4. Create a function to get the Computer's random choice
function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * gameChoices.length);
    return gameChoices[randomIndex];
}

// 5. Create a function to play a single round and update scores
function playRound(playerChoice) {
    const computerChoice = getComputerChoice();

    if (playerChoice === computerChoice) {
        updateUI('draw', playerChoice, computerChoice);
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        playerScore++;
        updateUI('win', playerChoice, computerChoice);
    } else {
        computerScore++;
        updateUI('lose', playerChoice, computerChoice);
    }
}

function updateUI(result, player, computer) {
    playerScoreSpan.textContent = playerScore;
    computerScoreSpan.textContent = computerScore;

    messageEl.className = result; 

    if (result === 'draw') {
        messageEl.textContent = `It's a draw! Both chose ${choiceEmojis[player]}`;
    } else if (result === 'win') {
        messageEl.textContent = `You win! ${choiceEmojis[player]} beats ${choiceEmojis[computer]}`;
    } else {
        messageEl.textContent = `You lose! ${choiceEmojis[computer]} beats ${choiceEmojis[player]}`;
    }
}

// 6. Create a function to update the HTML (Score text and Message)
function updateScores() {
    playerScoreSpan.textContent = playerScore;
    computerScoreSpan.textContent = computerScore;
}

// 7. Create a function to reset the game
function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerScoreSpan.textContent = 0;
    computerScoreSpan.textContent = 0;
    messageEl.textContent = "Choose one!";
    messageEl.className = '';
}

// 8. Add Event Listeners for Choice Buttons and the Reset Button
choiceButtons.forEach(button => {
    button.addEventListener('click', () => {
        playRound(button.id);
    });
});

resetBtn.addEventListener('click', resetGame);