function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxesRef = document.querySelector("#boxes");
const inputRef = document.querySelector("#controls > input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");

createBtn.addEventListener("click", () => createBoxes(inputRef.value));

destroyBtn.addEventListener("click", () => (boxesRef.innerHTML = ""));

function createBoxes(amount) {
  const boxesCollection = [];

  for (let i = 0; i < amount; i++) {
    const boxRef = document.createElement("div");
    boxRef.style.width = `${30 + 10 * i}px`;
    boxRef.style.height = `${30 + 10 * i}px`;
    boxRef.style.backgroundColor = getRandomHexColor();

    boxesCollection.push(boxRef);
  }

  boxesRef.append(...boxesCollection);
}
