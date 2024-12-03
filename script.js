let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const userScoreDisplay = document.getElementById("user-score");
const compScoreDisplay = document.getElementById("comp-score");
const msg = document.getElementById("msg");

// Function to handle a draw
const drawGame = () => {
    msg.textContent = "It's a draw!";
    console.log("Game was a draw.");
};

// Function to show the winner and update the score
const showWinner = (userWin) => {
    if (userWin) {
        userScore++;
        userScoreDisplay.textContent = userScore;
        msg.textContent = "You win!";
        console.log("You win!");
    } else {
        compScore++;
        compScoreDisplay.textContent = compScore;
        msg.textContent = "Computer wins!";
        console.log("Computer wins!");
    }
};

// Function to generate a random choice for the computer
const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

// Function to play the game
const playGame = (userChoice) => {
    console.log("User choice =", userChoice);
    const compChoice = genCompChoice();
    console.log("Computer choice =", compChoice);

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
};

// Add event listeners for user choices
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
