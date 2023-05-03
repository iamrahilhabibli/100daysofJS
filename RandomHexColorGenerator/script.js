

const randomColour = document.querySelector(".count");

document.querySelector(".generate").addEventListener("click", () => {
  const random = Math.random().toString(16).substring(2,8);
  document.body.style.backgroundColor = "#" + random;
  randomColour.innerHTML = "#" + random;
})
