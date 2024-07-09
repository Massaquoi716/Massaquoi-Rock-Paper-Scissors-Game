const startGameBtn = document.querySelector("#startGameBtn");
const gameContainer = document.querySelector(".container");
const scoreBoard = document.createElement("p");
let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let computerChoice = Math.floor((Math.random() * 3)) + 1;
    if(computerChoice == 1){
        return "rock"
    } else if(computerChoice == 2){
        return "paper"
    } else {
        return "scissors"
    }
}

function getHumanChoice(e) {
    let humanChoice = "";
    const targetText = e.target.textContent.trim().toLowerCase(); // Convert to lowercase and trim whitespace
    
    if (targetText === "rock" || targetText === "paper" || targetText === "scissors") {
        humanChoice = targetText;
        return humanChoice;
    }
    
}



function playRound(humanChoice, computerChoice) {
    // Convert choices to lowercase to ensure case insensitivity
    let human = humanChoice.toLowerCase();
    let computer = computerChoice.toLowerCase();

    if ((human === "rock" && computer === "scissors") ||
               (human === "paper" && computer === "rock") ||
               (human === "scissors" && computer === "paper")) {
        
        humanScore++;
    } else if ((human === "rock" && computer === "rock") ||
    (human === "paper" && computer === "paper") ||
    (human === "scissors" && computer === "scissors")){
        
        
    } else {
        computerScore++;
    }
}

function newGame(e){

}


function playGame() {
    startGameBtn.setAttribute("disabled", "");
    let roundCount = 1;
    let scoreDiv = document.createElement("div");
    let newGameBtn = document.createElement("button");
    newGameBtn.setAttribute("id", "newGame");
    newGameBtn.textContent = "New Game";
    let scoreText = document.createElement("p");
    newGameBtn.classList.add("button-style");

    let selectionDiv = document.createElement("div");
    let instructionP = document.createElement("p");
    instructionP.textContent = `Please click one of the options to play round ${roundCount}:`;
    instructionP.classList.add("description");

    let paperBtn = document.createElement("button");
    paperBtn.textContent = "Paper";
    paperBtn.classList.add("button-style"); // Add CSS class to paperBtn
        
    let rockBtn = document.createElement("button");
    rockBtn.textContent = "Rock";
    rockBtn.classList.add("button-style"); // Add CSS class to rockBtn
        
    let scissorsBtn = document.createElement("button");
    scissorsBtn.textContent = "Scissors";
    scissorsBtn.classList.add("button-style"); // Add CSS class to scissorsBtn

    let scoreBoard = document.createElement("p");
    scoreBoard.classList.add("score-board");


    selectionDiv.appendChild(instructionP);
    scoreDiv.appendChild(scoreText);
    scoreDiv.appendChild(newGameBtn);
    selectionDiv.appendChild(paperBtn);
    selectionDiv.appendChild(rockBtn);
    selectionDiv.appendChild(scissorsBtn);
    selectionDiv.appendChild(scoreBoard);
    
    gameContainer.appendChild(selectionDiv);
    

    selectionDiv.addEventListener("click", function(e) {
        const humanChoice = getHumanChoice(e);
        if (humanChoice) {
            playRound(humanChoice, getComputerChoice());
            scoreBoard.textContent = `Computer Score: ${computerScore} | Your Score: ${humanScore} draws: ${roundCount - (computerScore + humanScore)}`;
            instructionP.textContent = `Please click one of the options to play round ${roundCount}:`;
            roundCount++;
            

            if (humanScore === 5 || computerScore === 5) {
                scoreText.textContent = humanScore === 5 ? 'Congratulations! You won!' : 'Game over! Computer won!';
                let finalScore = document.createElement("p");
                finalScore = scoreBoard.cloneNode(true);
                scoreDiv.appendChild(finalScore);
                selectionDiv.remove();
                humanScore = 0;
                computerScore = 0;
                gameContainer.appendChild(scoreDiv);
            }
        }
    });

    scoreDiv.addEventListener("click", function(e){
        if(e.target.textContent === "New Game"){
            startGameBtn.removeAttribute("disabled");
            scoreDiv.remove();

        }
        
        

    })
}

startGameBtn.addEventListener('click', playGame);