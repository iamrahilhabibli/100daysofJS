function btnClick(){
    alert("I got clicked!");
}
// var audio = new Audio("./sounds/tom-1.mp3");

// function playSound(){
//     audio.play();
// }

var btns = document.querySelectorAll(".drum").length;


for (let i = 0; i < btns; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){

        var btnHTML = this.innerHTML;
        // console.log(btnHTML); this shows the innerHTML of each button in this case the letters inside that is how we can use the switch statement to separate them 
        switch (btnHTML) {
            case "w":
                var audio1 = new Audio("./sounds/crash.mp3");
                audio1.play();
                break;
            case "a":
                var audio2 = new Audio("./sounds/kick-bass.mp3");
                audio2.play();
                break;
            case "s":
                var audio3 = new Audio("./sounds/snare.mp3");
                audio3.play();
                break;
            case "d":
                var audio4 = new Audio("./sounds/tom-1.mp3");
                audio4.play();
                break;
            case "j":
                var audio5 = new Audio("./sounds/tom-2.mp3");  
                audio5.play();
                break;
            case "k":
                var audio6 = new Audio("./sounds/tom-3.mp3");          
                audio6.play();
                break;
            case "l":
                var audio7 = new Audio("./sounds/tom-4.mp3");    
                audio7.play();
                break;
            default:
                break;
        }
    })
}
