// 1. Знаходимо саму форму
const form = document.querySelector(".login-form");

// 2. Слухаємо подію "submit"
form.addEventListener("submit", (event) => {
  // 3. Зупиняємо стандартну поведінку (перезавантаження сторінки)
  event.preventDefault();

  // 4. Дістаємо елементи форми через form.elements
  const { email, password } = form.elements;

  // 5. Очищаємо значення від пробілів
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  // 6. Перевіряємо: чи обидва поля заповнені
  if (emailValue === "" || passwordValue === "") {
    alert("All form fields must be filled in");
    return; // Зупиняємо далі виконання
  }

  // 7. Створюємо об'єкт з даними
  const formData = {
    email: emailValue,
    password: passwordValue,
  };

  // 8. Виводимо дані в консоль
  console.log(formData);

  // 9. Очищаємо форму
  form.reset();
});
