const counterNumbers = document.getElementsByClassName("count");
const generateButton = document.querySelector("button");

generateButton.addEventListener("click", () => {
  const generatedRandomNumber = Math.floor(Math.random() * 100 + 1);
  for (let i = 0; i < counterNumbers.length; i++) {
    counterNumbers[i].innerHTML = generatedRandomNumber;
  }
});
