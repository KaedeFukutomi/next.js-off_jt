let count = 0;
const counterElement = document.getElementById("counter");
const increaseButton = document.getElementById("increase");
const decreaseButton = document.getElementById("decrease");

const updateCounter = (change) => {
  count += change;
  counterElement.textContent = count;
};

increaseButton.addEventListener("click", () => updateCounter(1));
decreaseButton.addEventListener("click", () => updateCounter(-1));
