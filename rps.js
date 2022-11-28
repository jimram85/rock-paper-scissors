function getComputerChoice(rps){
    return rps [Math.floor(Math.random() * rps.length)];
   
}
const pick = getComputerChoice (['Rock', 'Paper', 'Scissors']);

    console.log(pick)
