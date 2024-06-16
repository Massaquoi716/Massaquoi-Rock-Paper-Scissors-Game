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

function getHumanChoice(){
    let humanChoice;
    humanChoice  = prompt("Between 'rock, paper, and scissors, select your choice: ");
    while(true){
        try {
                
                humanChoice = humanChoice.toLowerCase();

                if(humanChoice === "rock" || humanChoice ===  "paper"  ||  humanChoice === "scissors"){
                    return humanChoice;
                } else{
                humanChoice = prompt("wrong value! choose either 'rock, paper, or scissors: ");
            }
    
            
            
        } catch (error) {
            if (error instanceof TypeError) {
                console.error("TypeError: Cannot call methods on null or undefined.");

                alert("Thanks for playing rock, paper and scissors game, bye and exiting...");

                break;
            } else {
                humanChoice = prompt("wrong value! choose either 'rock, paper, or scissors: ");
            }
            
        }


    }
   
}


function playRound(humanChoice, computerChoice){
    if(humanChoice === "rock" && computerChoice === "scissors"){
        humanScore++;
        
    } else if(humanChoice === "rock" && computerChoice === "paper"){
        computerScore++;
        
    } else if(humanChoice === "scissors" && computerChoice === "paper"){
        humanScore++;
        
    } else if(humanChoice === "scissors" && computerChoice === "rock"){
        computerScore++;
        
    } else if(humanChoice === "paper" && computerChoice === "scissors"){
        computerScore++;
        
    } else if(humanChoice === "paper" && computerChoice === "rock"){
        humanScore++;
        
    } 
}

function playGame(){
    let roundCount = 0;
    while(roundCount < 5){

        roundCount++;
        alert(`This is round: ${roundCount}`);
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        
        playRound(humanChoice, computerChoice);

    }

}
playGame();
alert(`You won ${humanScore} game(s) and computer won ${computerScore} game(s) and you guys draw ${5 - (computerScore + humanScore)} game(s)`);