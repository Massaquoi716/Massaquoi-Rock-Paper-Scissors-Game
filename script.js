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

            
            while(true){
                
                humanChoice = humanChoice.toLowerCase();

                if(humanChoice === "rock" || humanChoice ===  "paper"  ||  humanChoice === "scissors"){
                    return humanChoice;
                } else{
                humanChoice = prompt("wrong value! choose either 'rock, paper, or scissors: ");
            }
    
            }
            
        } catch (error) {
            console.error("An error occurred:", error.message);
            humanChoice = prompt("wrong value! choose either 'rock, paper, or scissors: ");
        }


    }
   
}


getHumanChoice();