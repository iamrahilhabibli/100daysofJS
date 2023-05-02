function btnClick(){
    alert("I got clicked!");
}



var btns = document.querySelectorAll(".drum").length;


for (let i = 0; i < btns; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click",btnClick);
}
// [...btns].forEach(btn => {
//   addEventListener("click",btnClick);
// });