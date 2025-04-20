// 1. Знаходимо елементи в DOM
const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

// 2. Додаємо слухача події 'input'
inputEl.addEventListener("input", () => {
  // 3. Беремо значення з інпуту та прибираємо пробіли
  const name = inputEl.value.trim();

  // 4. Перевіряємо: якщо name порожнє — показуємо "Anonymous"
  outputEl.textContent = name === "" ? "Anonymous" : name;
});
