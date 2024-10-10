function playGame(playerChoice){
    let result ='';
    let computerMove = getComputerMove();

    if(playerChoice === computerMove){
        result = "Tie"
    }
    else if(playerChoice === "Rock"){
        if(computerMove === "Paper"){
            result = "You Loose";
        }else{
            result = "You Win!"
        }
    }
    else if(playerChoice === "Paper"){
        if(computerMove === "Rock"){
            result = "You win!"
        }else{
            result = "You Loose"
        }
    }
    else if(playerChoice === "Scissors"){
        if(computerMove === "Rock"){
            result = "You Loose"
        }else{
            result = "You win!"
        }
    }
    let playerMove = document.getElementById('playerMove');
    let pcMove = document.getElementById('pcMove');
    playerMove.innerHTML = playerChoice;
    pcMove.innerHTML = computerMove;
    let gameResults = document.getElementById('results')
    gameResults.innerHTML = result

    switch (result){
        case "You win!":
            gameResults.style.color = 'green';
            break;
        case "You Loose":
            gameResults.style.color = 'red';
            break;
        case "Tie":
            gameResults.style.color = "yellow";
            break;

    }



    
}

function getComputerMove(){
    const randomNum = Math.random()
    let computerMove = '';

    if (randomNum <= 0.33){
        computerMove = "Paper";
    }else if(randomNum > 0.33 && randomNum <= 0.66){
        computerMove = "Rock"
    }else{
        computerMove = "Scissors"
    }
    return computerMove
}
