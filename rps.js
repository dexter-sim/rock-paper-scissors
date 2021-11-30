let player_score = 0;
let com_score = 0;
let round = 0;

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
    document.getElementById("round").textContent = "Round: " + JSON.stringify(round);
    document.getElementById("wpn").textContent = "Enemy's Weapon";
    if (c === "Wand"){
        document.getElementById("wpn-pic").src = "images/magic-wand.png";
    } else if (c === "Bow"){
        document.getElementById("wpn-pic").src = "images/bow-and-arrow.png";
    } else {
        document.getElementById("wpn-pic").src = "images/sword.png";
    }

    if (p === c){
        console.log("Tie!");
        outcome = 0;
        document.getElementById("combat").textContent = "Combat: 2 " + p + "s were picked. It is a draw.";
    } else if (p === "Wand" && c === "Bow"){
        console.log("Win!");
        outcome = 1;
        document.getElementById("player").textContent = "Your Score: " + JSON.stringify(++player_score);
        document.getElementById("combat").textContent = "Combat: You casted a spell before the enemy could draw his bow. You gained a score.";
    } else if (p === "Bow" && c === "Sword"){
        console.log("Win!");
        outcome = 1;
        document.getElementById("player").textContent = "Your Score: " + JSON.stringify(++player_score);
        document.getElementById("combat").textContent = "Combat: You shot a direct hit with your bow before the enemy got close enough to strike at you. You gained a score."; 
    } else if (p === "Sword" && c === "Wand"){
        console.log("Win!");
        outcome = 1;
        document.getElementById("player").textContent = "Your Score: " + JSON.stringify(++player_score);
        document.getElementById("combat").textContent = "Combat: You striked the enemy before he managed to conjure a spell. You gained a score.";
    } else if (p === "Wand" && c === "Sword"){
        console.log("Lose!");
        outcome = 2;
        document.getElementById("computer").textContent = "Enemy's Score: " + JSON.stringify(++com_score);
        document.getElementById("combat").textContent = "Combat: While conjuring a fireball, the enemy landed a hit on you with his mighty sword. Enemy gained a score.";
    } else if (p === "Bow" && c === "Wand"){
        console.log("Lose!");
        outcome = 2;
        document.getElementById("computer").textContent = "Enemy's Score: " + JSON.stringify(++com_score);
        document.getElementById("combat").textContent = "Combat: The enemy casted illusions. You got striked before you can identify the real copy. Enemy gained a score.";
    } else {
        console.log("Lose!");
        outcome = 2;
        document.getElementById("computer").textContent = "Enemy's Score: " + JSON.stringify(++com_score);
        document.getElementById("combat").textContent = "Combat: The enemy rained arrows upon you from range, rendering your melee weapon useless. Enemy gained a score."; 
    }
    if (outcome === 0){
        document.getElementsByClassName("scoreboard")[0].style.border = "skyblue solid";
        document.getElementsByClassName("com")[0].style.borderRight = "skyblue solid";
    } else if (outcome === 1){
        document.getElementsByClassName("scoreboard")[0].style.border = "green solid";
        document.getElementsByClassName("com")[0].style.borderRight = "green solid";
    } else {
        document.getElementsByClassName("scoreboard")[0].style.border = "lightcoral solid";
        document.getElementsByClassName("com")[0].style.borderRight = "lightcoral solid";
    }
    
    if (com_score === 5){
        document.getElementById("message").textContent = "You Lost The Battle!";
        document.getElementById("reset").textContent = "Press any button to fight again."
    } else if (player_score === 5){
        document.getElementById("message").textContent = "You Won The Battle!";
        document.getElementById("reset").textContent = "Press any button to fight again."
    }
}

function check5(){
    if (com_score === 5 || player_score === 5){
        player_score = 0;
        com_score = 0;
        round = 0;
        document.getElementById("player").textContent = "Your Score: 0";
        document.getElementById("computer").textContent = "Enemy's Score: 0";
        document.getElementById("round").textContent = "Round: 0";
        document.getElementById("message").textContent = "";
        document.getElementById("reset").textContent = "";
        document.getElementById("combat").textContent = "Combat: Empty"
        document.getElementById("wpn").textContent = "Battle!";
        document.getElementById("wpn-pic").src = "images/war.png";
        document.getElementsByClassName("scoreboard")[0].style.border = "grey solid";
        document.getElementsByClassName("com")[0].style.borderRight = "grey solid";
        return true;
    } else {
        return false;
    }
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