let counterValue = 0;

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const value = document.querySelector("#value");

decrementBtn.addEventListener("click", onButtonDecrementClick);

function onButtonDecrementClick() {
  counterValue -= 1;
  value.textContent = counterValue;
}
console.log(onButtonIncrementClick);

incrementBtn.addEventListener("click", onButtonIncrementClick);

function onButtonIncrementClick() {
  counterValue += 1;
  value.textContent = counterValue;
}
console.log(onButtonIncrementClick);
