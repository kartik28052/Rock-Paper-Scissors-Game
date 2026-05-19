let rock=document.querySelector("#rock")
let paper=document.querySelector("#paper")
let scissors=document.querySelector("#scissors")

let resultText = document.querySelector("#result");
let computerChoiceText = document.querySelector("#computerchoice");
let yourScoreText = document.querySelector("#yourscore");
let computerScoreText = document.querySelector("#computerscore");


const winningCondition=[
    ["rock", "scissors"],
    ["paper", "rock"],
    ["scissors", "paper"]
];

let choices=["rock","paper","scissors"]

let userchoice;
let computerchoice;

let yourscore=0;
let computerscore=0;

const  checkWinner=()=>{

    if(userchoice===computerchoice){
    resultText.innerText="Result: Draw";
    return;
    }

    let userwin=false;

    for(let condition of winningCondition){

    if(condition[0]===userchoice &&
         condition[1]===computerchoice){
        userwin=true;
    }
}

if(userwin){
resultText.innerText="Result: You won"
 yourscore++
}else{
resultText.innerText="Result: Computer Won"
computerscore++
}

yourScoreText.innerText="Your Score: "+yourscore;
computerScoreText.innerText="Computer Score: "+computerscore;
}

const playgame=(choice)=>{

    userchoice=choice;

    let randomIndex=Math.floor(Math.random()*3);

    computerchoice=choices[randomIndex];

    computerChoiceText.innerText="Computer Choice: "+ computerchoice;

    checkWinner();
}

rock.addEventListener("click",()=>{
    playgame("rock");
})

paper.addEventListener("click",()=>{
    playgame("paper");
})

scissors.addEventListener("click",()=>{
    playgame("scissors");
})