let count = 0;
const counterElement = document.getElementById("counter");
const increaseButton = document.getElementById("increase");
const decreaseButton = document.getElementById("decrease");

const increaseCounter = (change) => {
  count += change;
  counterElement.textContent = count;
};

const decreaseCounter = (change) => {
  count += change;
  counterElement.textContent = count;
};
increaseButton.addEventListener("click", () => increaseCounter(1));
decreaseButton.addEventListener("click", () => decreaseCounter(-1));
