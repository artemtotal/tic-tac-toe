const xImageSrc = 'X.png';
const oImageSrc = 'O.png';

// Start button
const button = document.getElementById('start');

const board = document.getElementById('board');
const cells = []; 
let currentPlayer = 'X';

function startGame() {
    const startButton = document.createElement('button');
    startButton.textContent = 'Start a Game';
    startButton.className = 'button';
    startButton.addEventListener('click', function() {
        createBoard();
        startButton.remove();
    });
    document.body.appendChild(startButton);    
}

// Reset button
function buttonReset() {
    const resetButton = document.createElement('button');
    resetButton.textContent = 'Reset Game';
    resetButton.className = 'button';
    resetButton.addEventListener('click', function() {
        board.innerHTML = '';
        cells.length = 0;
        xMoves = [];
        oMoves = [];
        currentPlayer = 'X';
        createBoard();
    });
    document.body.appendChild(resetButton);
}

// Save moves
let xMoves = [];
let oMoves = [];

// All possible winning combinations
const winningCombinations = [ 
    // Rows
    [0, 1, 2], // First row
    [3, 4, 5], // Second row
    [6, 7, 8], // Third row

    // Columns
    [0, 3, 6], // First column
    [1, 4, 7], // Second column
    [2, 5, 8], // Third column

    // Diagonals
    [0, 4, 8], // First diagonal
    [2, 4, 6] // Second diagonal
];

// Create board for Tic Tac Toe
function createBoard(){
    for (let i = 0; i < 9; i++) {
        const cell = document.createElement('div'); 
        cell.classList.add('cell'); 
        board.appendChild(cell);
        cells.push(cell);
        cell.addEventListener('click', () => makeMove(i));
    } 
}

function makeMove(i) {
    if (isCellEmpty(i)) {
        const img = document.createElement('img');
        img.src = currentPlayer === 'X' ? xImageSrc : oImageSrc;
        img.alt = currentPlayer;
        cells[i].appendChild(img);
        cells[i].style.backgroundColor = currentPlayer === 'X' ? 'lightblue' : 'lightcoral';
        ifXoderO(i); // for two players
        if (checkGameFinished()) return;
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        if (currentPlayer === 'O') botMove();
    }
}

function isCellEmpty(i) {
    return cells[i].textContent === '';
}

function ifXoderO(i) {
    if (currentPlayer === 'X') {
        xMoves.push(i); // records the cell chosen by the player
        console.log(xMoves);
    } else {
        oMoves.push(i); // records the cell chosen by the player
    } 
};

function botMove() {
    let emptyCells = cells.map((cell, index) => cell.childElementCount === 0 ? index : null).filter(index => index !== null); // Finds empty cells
    let randomIndex = emptyCells[Math.floor(Math.random() * emptyCells.length)]; // Picks a random empty cell
    makeMove(randomIndex); // Bot makes a move
}

function checkGameFinished() {
    for (let i = 0; i < winningCombinations.length; i++) {
        const combination = winningCombinations[i];

        if (combination.every((value) => xMoves.includes(value))) {
            finishGame("Player X wins!");
            return true;
        }
        if (combination.every((value) => oMoves.includes(value))) {
            finishGame("Player O wins!");
            return true;
        }
    }
    const totalMoves = xMoves.length + oMoves.length;

    if (totalMoves === 9) {
        finishGame("Stalemate!");
        return true;
    }
    return false;
}

function finishGame(text) {
    setTimeout(() => {
        if(!alert(text)) {window.location.reload();}
    }, 100);
}

startGame();
buttonReset();
