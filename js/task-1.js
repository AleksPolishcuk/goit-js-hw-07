
const categories = document.querySelectorAll("#categories .item");


console.log(`Number of categories: ${categories.length}`);


categories.forEach((category) => {
  const title = category.querySelector("h2").textContent; // Заголовок категорії
  const itemsCount = category.querySelectorAll("ul li").length; // Кількість елементів

  console.log(`Category: ${title}`);
  console.log(`Elements: ${itemsCount}`);
});
