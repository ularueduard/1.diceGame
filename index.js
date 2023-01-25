/*******First Dice**************************/

var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

document.querySelector(".img1").setAttribute("src", randomImageSource);

/*******Second Dice**************************/

var randomNumber2 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImage = "dice" + randomNumber2 + ".png"; //dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

document.querySelector(".img2").setAttribute("src", randomImageSource);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = " Player 1 Wins";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = " Player 2 Wins";
} else {
  document.querySelector("h1").innerHTML = " Draw";
}
