const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const newIngredientsEl = ingredients.map((ingredient) => {
  const createEl = document.createElement("li");
  createEl.classList.add("item");
  createEl.textContent = ingredient;
  return createEl;
});

const insertEl = document.querySelector("#ingredients");
insertEl.append(...newIngredientsEl);

console.log(insertEl);
