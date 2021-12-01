let player_score = 0;
let com_score = 0;
let round = 0;

const enemypic = document.getElementById("wpn-pic");
const playerScore = document.getElementById("player");
const enemyScore = document.getElementById("computer");
const roundNumber = document.getElementById("round");
const borderColor = document.getElementsByClassName("scoreboard");
const innerColor = document.getElementsByClassName("com");
const ending = document.getElementById("message");
const combat = document.getElementById("combat");
const warcry = document.getElementById("wpn");
const resetButton = document.getElementById("reset");

resetButton.addEventListener("click", resetGame);

function resetGame(){
    player_score = 0;
    com_score = 0;
    round = 0;
    playerScore.textContent = "Your Score: 0";
    enemyScore.textContent = "Enemy's Score: 0";
    roundNumber.textContent = "Round: 0";
    ending.textContent = "";
    combat.textContent = "Combat: Empty"
    warcry.textContent = "Battle!";
    enemypic.src = "images/war.png";
    borderColor[0].style.border = "grey solid";
    innerColor[0].style.borderRight = "grey solid";
    resetButton.textContent = "";
}

function computerPlay(){
    const num = Math.floor(Math.random() * 3);
    const com = num === 0 ? "Wand" : num === 1 ? "Bow" : "Sword"; 
    console.log("Computer chose " + com);
    return com;
}

function playRound(playerSelect, comSelect){
    const p = playerSelect;
    const c = comSelect;
    let outcome = 0;
    round++;
    roundNumber.textContent = "Round: " + JSON.stringify(round);
    document.getElementById("wpn").textContent = "Enemy's Weapon";
    if (c === "Wand"){
        enemypic.src = "images/magic-wand.png";
    } else if (c === "Bow"){
        enemypic.src = "images/bow-and-arrow.png";
    } else {
        enemypic.src = "images/sword.png";
    }

    if (p === c){
        console.log("Tie!");
        outcome = 0;
        combat.textContent = "Combat: 2 " + p + "s were picked. It is a draw.";
    } else if (p === "Wand" && c === "Bow"){
        outcome = 1;
        playerScore.textContent = "Your Score: " + JSON.stringify(++player_score);
        combat.textContent = "Combat: You casted a spell before the enemy could draw his bow. You gained a score.";
    } else if (p === "Bow" && c === "Sword"){
        outcome = 1;
        playerScore.textContent = "Your Score: " + JSON.stringify(++player_score);
        combat.textContent = "Combat: You shot a direct hit with your bow before the enemy got close enough to strike at you. You gained a score."; 
    } else if (p === "Sword" && c === "Wand"){
        outcome = 1;
        playerScore.textContent = "Your Score: " + JSON.stringify(++player_score);
        combat.textContent = "Combat: You striked the enemy before he managed to conjure a spell. You gained a score.";
    } 
    
    else if (p === "Wand" && c === "Sword"){
        outcome = 2;
        enemyScore.textContent = "Enemy's Score: " + JSON.stringify(++com_score);
        combat.textContent = "Combat: While conjuring a fireball, the enemy landed a hit on you with his mighty sword. Enemy gained a score.";
    } else if (p === "Bow" && c === "Wand"){
        outcome = 2;
        enemyScore.textContent = "Enemy's Score: " + JSON.stringify(++com_score);
        combat.textContent = "Combat: The enemy casted illusions. You got striked before you can identify the real copy. Enemy gained a score.";
    } else {
        outcome = 2;
        enemyScore.textContent = "Enemy's Score: " + JSON.stringify(++com_score);
        combat.textContent = "Combat: The enemy rained arrows upon you from range, rendering your melee weapon useless. Enemy gained a score."; 
    }


    if (outcome === 0){
        borderColor[0].style.border = "skyblue solid";
        innerColor[0].style.borderRight = "skyblue solid";
    } else if (outcome === 1){
        borderColor[0].style.border = "green solid";
        innerColor[0].style.borderRight = "green solid";
    } else {
        borderColor[0].style.border = "lightcoral solid";
        innerColor[0].style.borderRight = "lightcoral solid";
    }
    
    if (com_score === 5){
        ending.textContent = "You Lost The Battle!";
        resetButton.textContent = "Press here to fight again."
    } else if (player_score === 5){
        ending.textContent = "You Won The Battle!";
        resetButton.textContent = "Press here to fight again."
    }
}

function check5(){
    return com_score === 5 || player_score === 5;
}

function rockclick(){
    if (!check5()){
        playRound("Wand", computerPlay());
    }
}
function paperclick(){
    if (!check5()){
        playRound("Bow", computerPlay());
    }
}
function scissorsclick(){
    if (!check5()){
        playRound("Sword", computerPlay());
    }
}

let rock = document.getElementById("rock").addEventListener('click', rockclick);
let paper = document.getElementById("paper").addEventListener('click', paperclick);
let scissors = document.getElementById("scissors").addEventListener('click', scissorsclick);