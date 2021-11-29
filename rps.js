let player_score = 0;
let com_score = 0;

function computerPlay(){
    const num = Math.floor(Math.random() * 3);
    const com = num === 0 ? "Rock" : num === 1 ? "Paper" : "Scissors"; 
    console.log("Computer chose " + com);
    return com;
}

function playRound(playerSelect, comSelect){
    const p = playerSelect;
    const c = comSelect;
    document.getElementById("cpu").innerHTML = "Computer picked " + c + ".";
    if (p === c){
        console.log("Tie!");
    } else if ((p === "Scissors" && c === "Paper") || 
                (p === "Paper" && c === "Rock") ||
                (p === "Rock" && c === "Scissors")){
        console.log("Win!");
        document.getElementById("pscore").innerHTML = ++player_score;
        const text = "Win! " + playerSelect + " beats " + comSelect + "!"; 
        document.getElementById("outcome").innerHTML = text;
    } else {
        console.log("Lose!");
        document.getElementById("comscore").innerHTML = ++com_score;
        const text = "Lose. " + playerSelect + " loses to " + comSelect + ".";
        document.getElementById("outcome").innerHTML = text;
    }
    if (com_score === 5){
        document.getElementById("final").innerHTML = "Computer won. Press any button to reset.";
    } else if (player_score === 5){
        document.getElementById("final").innerHTML = "You won. Press any button to reset.";
    }
}

function check5(){
    if (com_score === 5 || player_score === 5){
        player_score = 0;
        com_score = 0;
        document.getElementById("final").innerHTML = "";
        document.getElementById("outcome").innerHTML = "";
        document.getElementById("cpu").innerHTML = "Play the game!"
        document.getElementById("pscore").innerHTML = player_score;
        document.getElementById("comscore").innerHTML = com_score;
        return true;
    } else {
        return false;
    }
}

function rockclick(){
    if (!check5()){
        playRound("Rock", computerPlay());
    }
}
function paperclick(){
    if (!check5()){
        playRound("Paper", computerPlay());
    }
}
function scissorsclick(){
    if (!check5()){
        playRound("Scissors", computerPlay());
    }
}

let rock = document.getElementById("rock").addEventListener('click', rockclick);
let paper = document.getElementById("paper").addEventListener('click', paperclick);
let scissors = document.getElementById("scissors").addEventListener('click', scissorsclick);