function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// 1. Знаходимо кнопку і span для відображення кольору
const changeColorBtn = document.querySelector(".change-color");
const colorSpan = document.querySelector(".color");

// 2. Слухаємо клік по кнопці
changeColorBtn.addEventListener("click", () => {
  // 3. Генеруємо випадковий колір
  const randomColor = getRandomHexColor();

  // 4. Змінюємо фон body
  document.body.style.backgroundColor = randomColor;

  // 5. Вставляємо значення кольору в span
  colorSpan.textContent = randomColor;
});
