# Tic Tac Toe Game

This project is a simple Tic Tac Toe game implemented in JavaScript. It features a game board where two players, "X" and "O", can play against each other. There is also a bot that plays as "O". The project includes functionalities to start a new game and reset the current game.

## Features

- **Start Game:** A button to start a new game.
- **Reset Game:** A button to reset the current game.
- **Two Player Mode:** Play as either "X" or "O".
- **Bot Player:** The bot automatically plays as "O" when it's the bot's turn.
- **Winning Combinations:** The game checks for all possible winning combinations to determine the winner.
- **Stalemate Check:** The game checks for a draw when all cells are filled and there is no winner.

## How to Play

1. **Start the Game:** Click on the "Start a Game" button to initialize the game board.
2. **Make a Move:** Click on any empty cell to make your move. Player "X" starts the game.
3. **Bot Move:** After player "X" makes a move, the bot will automatically make its move as "O".
4. **Check for Winner:** The game will check for a winner after every move. If a player wins or the game is a draw, an alert will display the result.
5. **Reset the Game:** Click on the "Reset Game" button to clear the board and start a new game.

## Project Structure

- **index.html:** The HTML file that contains the structure of the game board and buttons.
- **style.css:** The CSS file for styling the game board and buttons.
- **script.js:** The JavaScript file that contains the game logic.

## JavaScript Functions

- `startGame()`: Creates and initializes the start button.
- `buttonReset()`: Creates and initializes the reset button.
- `createBoard()`: Creates the game board with 9 cells.
- `makeMove(i)`: Handles the move made by the player or the bot.
- `isCellEmpty(i)`: Checks if a cell is empty.
- `ifXoderO(i)`: Records the moves made by players.
- `botMove()`: Handles the bot's move by selecting a random empty cell.
- `checkGameFinished()`: Checks if the game is finished by checking all winning combinations.
- `finishGame(text)`: Displays an alert with the result and reloads the page.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/Artemtotal/tic-tac-toe.git
    ```
2. Open `index.html` in your web browser to start the game.

## License

This project is licensed under the MIT License. 
