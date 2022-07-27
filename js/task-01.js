const categoriesItem = document.querySelectorAll("#categories .item");
console.log(`Numbers of category = ${categoriesItem.length}`);

const itemEl = document.querySelectorAll(`.item`);

const itemText = [...itemEl].forEach(function (element) {
  console.log(`Category:`, element.querySelector("h2").textContent);
  console.log(`Elements:`, element.querySelectorAll("li").length);
});
