let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){

    let max = 3;
    let computerChoice = Math.floor(Math.random() * max);
    if(computerChoice === 0){
        return "rock";
    }
    else if(computerChoice === 1){
        return "paper";
    }

    else if(computerChoice === 2){
        return "scissors";
    }
    else{
        return null;
    }
}
function getHumanChoice(){

    let humanChoice = prompt("Write rock, paper or scissors");
    if(!humanChoice){
        return null;
    }
    humanChoice = humanChoice.toLowerCase();
    if(humanChoice === "rock"){
        return "rock";
    }
    else if(humanChoice === "paper"){
        return "paper";
    }
    else if(humanChoice === "scissors"){
        return "scissors";
    }
    else{
        return null;
    }
}

function playGame(){
    
        function playRound(){

        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        if (!humanSelection) {
            console.log("Invalid input.");
            return;
        }

        if(humanSelection === "rock" && computerSelection === "scissors"){
        console.log("You win! Rock beats Scissors");
        humanScore++;
        }
        else if(humanSelection === "paper" && computerSelection === "rock"){
        console.log("You win! Paper beats Rock");
        humanScore++;
        }
        else if(humanSelection === "scissors" && computerSelection === "paper"){
        console.log("You win! Scissors beats Paper");
        humanScore++;
        }
        else if(humanSelection === "rock" && computerSelection === "paper"){
        console.log("You lose! Paper beats Rock");
        computerScore++;
        }
        else if(humanSelection === "paper" && computerSelection === "scissors"){
        console.log("You lose! Scissors beats Paper");
        computerScore++;
        }
        else if(humanSelection === "scissors" && computerSelection === "rock"){
        console.log("You lose! Rock beats Scissors");
        computerScore++;
        }
        else if((humanSelection === "rock" && computerSelection === "rock") || (humanSelection === "paper" && computerSelection === "paper") ||(humanSelection === "scissors" && computerSelection === "scissors")){
        console.log("Tie");
        }
    
        }
        for (let i = 0; i < 5; i++){
        playRound();
        }
        if(humanScore > computerScore){
            console.log("Human wins!");
        }
        else if(humanScore < computerScore){
            console.log("Computer wins!");
        }
        else {
            console.log("It's tie.");
        }

    
}

playGame();