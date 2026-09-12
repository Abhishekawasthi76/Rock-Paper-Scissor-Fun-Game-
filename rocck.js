let userScore = 0;
let compScore = 0;
let DrawScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScoreP = document.querySelector("#comp-score");
const DrawScorep = document.querySelector("#Draw-score");



const generateCompChoice =() => {
 // rock , paper , scissor //
 const options = ["rock", "paper", "scissor"];
 const randIdx = Math.floor (Math.random () * 3);
 return options[randIdx];
};


const drawGame = () => {
    console.log("game was draw");
    msg.innerText = "Game Draw !";
    msg.style.backgroundColor = "#61E8E1";
    DrawScore++;
        DrawScorep.innerText = DrawScore;
}


const showWinner = (userWin) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("you win");
        msg.innerText = "You Win !";
         msg.style.backgroundColor ="green";
    }else{
        compScore++;
        compScoreP.innerText = compScore;
        
        console.log("you loose ");
        msg.innerText = "You Loose !";
         msg.style.backgroundColor ="red";
    }
}
const playGame = (userChoice) => {
    console.log("user choice = " , userChoice);
    //generate computer choice 
    const compChoice = generateCompChoice();
     console.log("comp choice = ", compChoice);

     if (userChoice === compChoice) {
        drawGame();
     }
     else{
        let userWin = true;
        if(userChoice === "rock"){
           userWin =  compChoice === "paper" ? false : true ;

        }else if (userChoice === "paper"){
           userWin = compChoice ==="scissor" ? false : true ;
        }else{
          userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
     }
     
};
choices.forEach((choice) => {

    choice.addEventListener("click" , () =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});