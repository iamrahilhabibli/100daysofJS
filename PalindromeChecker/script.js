const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

btn.addEventListener("click", pallindrome)

function pallindrome(){
    const word = document.querySelector(".input-text").value;
    let len = word.length;
    let start = word.substring(0, Math.floor(len/2)).toLowerCase();
    let end = word.substring(len - Math.floor(len/2), len).toLowerCase();

    let flip = end.split("").reverse().join("")

    if (start === flip) {
        result.innerHTML = `${word} is a Palindrom`
    }
    else{
        result.innerHTML = `${word} is NOT a Palindrom`
    }
}