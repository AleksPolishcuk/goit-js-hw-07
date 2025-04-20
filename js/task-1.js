// Отримуємо список всіх категорій (елементи з класом .item)
const categories = document.querySelectorAll("#categories .item");

// Виводимо кількість категорій
console.log(`Number of categories: ${categories.length}`);

// Перебираємо кожен елемент категорії
categories.forEach((category) => {
  const title = category.querySelector("h2").textContent; // Заголовок категорії
  const itemsCount = category.querySelectorAll("ul li").length; // Кількість елементів

  console.log(`Category: ${title}`);
  console.log(`Elements: ${itemsCount}`);
});
