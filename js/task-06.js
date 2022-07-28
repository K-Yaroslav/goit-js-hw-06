const inputEl = document.querySelector('input[data-length="6"]');

const handleinputClass = (remove, add) => {
  inputEl.classList.remove(remove);
  inputEl.classList.add(add);
};

const testing = () => {
  const elLength = inputEl.value.length;
  const elDataLength = Number(inputEl.getAttribute("data-length"));
  elLength === elDataLength
    ? handleinputClass("invalid", "valid")
    : handleinputClass("valid", "invalid");
};

inputEl.addEventListener("blur", testing);
