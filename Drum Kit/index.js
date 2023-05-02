function btnClick(){
    alert("I got clicked!");
}
var audio = new Audio("./sounds/tom-1.mp3");

function playSound(){
    audio.play();
}


var btns = document.querySelectorAll(".drum").length;


for (let i = 0; i < btns; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click",playSound);

}
