var computerChoice

var computerChooses = function () {

  var randomNumber = Math.random()

  if (randomNumber <= .32) {
    computerChoice = 'Rock'
  } else if (randomNumber <= .65 ) {
    computerChoice = 'Paper'
  } else {
    computerChoice = 'Scissors'
  }

  console.log("Computer choice", computerChoice)

}




var game = function () {

  var userChoice = prompt("Pick Rock, Paper, or Scissors! By typing rock paper or scissors")

  computerChooses()

  if (computerChoice === userChoice) {
    alert("You tied!")
  } else {
    if (userChoice === "Rock") {
      if (computerChoice === "Scissors") {
        alert("You win!")
      } else {
        alert("You lose!")
      }
    } else if (userChoice === "Paper") {
      if (computerChoice === "Rock") {
        alert("You win!")
      } else {
        alert("You lose!")
      }
    } else if (userChoice === "Scissors"){
      if (computerChoice === "Paper") {
        alert("You win!")
      } else {
        alert("You lose!")
      }
    } else {
      alert("You didn't follow the rules!")
    }
  }
}

//run game for 5 rounds DONE
//keep a count of how many rounds the game has run DONE



var round = 1;

while (round <=2) {
  $("body").append(round)
  game()
  round += 1
}



//each the game runs, place the round number on our webpage
//          - jquery
