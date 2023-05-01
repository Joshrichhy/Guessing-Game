// const prompt = require("prompt-sync")();


//
 let number = Math.floor(Math.random() * 100);


let guessedNumber = document.getElementById("number")
let guessButton = document.getElementById("guessingButton")
let title = document.getElementById("title")
let body = document.getElementById("body")
let playAgain = document.getElementById("resetButton")
let exit = document.getElementById("exitButton")

let numberOfTries = 5;

function guess(){
    numberOfTries--;
    console.log(number)
    console.log(numberOfTries)


    if (numberOfTries === 0){
        title.innerText = "Game Over"
        document.querySelector('#guessingButton').disabled = true;
    }

    else if (guessedNumber.value == number){
        document.querySelector('#guessingButton').disabled = true;
        title.innerText = "Wow, you guessed the right Number";
        body.innerText = "haha, you did well, click Play Again to restart"

    }
    else if (guessedNumber.value > number){
        title.innerText = "Number is too high"
        body.innerText = "Keep trying, You have" +numberOfTries + "tries"
    }
    else if (guessedNumber.value < number){
        title.innerText = "Number is too low"
        body.innerText = "Keep trying, You have" +numberOfTries + "tries"
    }




}

function resetGame(){
         numberOfTries = 5;
    number = Math.floor(Math.random() * 100);
    body.innerText = "Alright"
    document.querySelector('#guessingButton').disabled = false;

}

function exitGame(){
    document.querySelector('#guessingButton').disabled = true;
    title.innerText = "Thank You for banking with me"
    body.innerText = "Have a nice day"
}

playAgain.addEventListener("click", resetGame)

guessButton.addEventListener("click", guess)
exit.addEventListener("click", exitGame)







