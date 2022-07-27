const inputEl = document.querySelector("#font-size-control");
let spanEl = document.querySelector("#text");
spanEl.style.fontSize = "0px";

const editValue = () => {
  spanEl.style.fontSize = `${inputEl.value}px`;
};

inputEl.addEventListener("input", editValue);
