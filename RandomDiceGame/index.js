var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var randomNumber2 = Math.floor(Math.random() * 6 + 1);
var randomImgElement = document.querySelector(".img1").setAttribute("src", "./images/" + "dice" + randomNumber1 + ".png");
var randomImgElement2 = document.querySelector(".img2").setAttribute("src", "./images/" + "dice" + randomNumber2 + ".png");

function winLoseTie(randomNumber1,randomNumber2){
    if(randomNumber1 > randomNumber2){
        document.querySelector("h1").innerHTML = "Player 1 wins!";
    }
    else if(randomNumber1 < randomNumber2){
        document.querySelector("h1").innerHTML = "Player 2 wins";
    }
    else{
        document.querySelector("h1").innerHTML = "Draw! Try Again!";
    }
}
winLoseTie(randomNumber1,randomNumber2);