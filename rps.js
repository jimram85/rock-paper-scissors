//tools
const rock = "Rock";
const paper = "Paper";
const scissors = "Scissors";

//player entry
let enterRockPaperScissors = prompt ("Enter Rock, Paper, or Scissors...");

//pick rock paper scissors randomly (computer)
function getComputerChoice(pickRandomTool){
    return pickRandomTool [Math.floor(Math.random() * pickRandomTool.length)];
   
}
 //plays round for rock paper scissors 
   function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        return 'Its a draw.';
    } else if ((playerSelection === rock && computerSelection === paper) ||
        (playerSelection === paper && computerSelection === scissors) || 
        (playerSelection === scissors && computerSelection === rock)) {
        return 'you lost this one.';
    } else 
        return "Wow, you got one..."
}

//choice of tool
const computerSelection = getComputerChoice ([rock, paper, scissors]);
const playerSelection = enterRockPaperScissors;

 console.log(playRound(playerSelection, computerSelection));