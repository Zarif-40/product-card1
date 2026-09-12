const firstProductCard = document.querySelector(".product-card");
const highlightButton = document.querySelector("#highlight-first-card");
const greenColorHash = "#00ff00";
const violetColorHash = "#ff00ff";
const googleURL = "http://google.com";
const outputLogButton = document.querySelector("#output-console-log");

highlightButton.addEventListener("click", () => {
  firstProductCard.style.backgroundColor = greenColorHash;
});

const productCards = document.querySelectorAll(".product-card");
const highlightAllButton = document.querySelector("#highlight-all-card");

highlightAllButton.addEventListener("click", () => {
  productCards.forEach((card) => {
    card.style.backgroundColor = violetColorHash;
  });
});

const openGoogleButton = document.querySelector("#open-google");

openGoogleButton.addEventListener("click", () => {
  window.open(googleURL);
});

outputLogButton.addEventListener("click", () =>
  outputConsoleLog("Выбери свой продукт"),
);

function outputConsoleLog(message) {
  alert(message);
  console.log(message);
}

const mainTitle = document.querySelector(".page-title");
mainTitle.addEventListener("mouseenter", function (event) {
  const titleText = event.target.textContent;
  console.log(titleText);
});

const backgroundColorButton = document.getElementById("toggle-own-color");
backgroundColorButton.addEventListener("click", () => {
  backgroundColorButton.classList.toggle("red-bg");
});
