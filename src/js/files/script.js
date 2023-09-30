// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

const currentDateId = document.getElementById("currentDate");

if (currentDateId) {
  // Отримуємо поточну дату
  const currentDate = new Date();

  // Форматуємо дату у вказаний вами формат (наприклад, "dd Month yyyy")
  const formattedDate = currentDate.toLocaleDateString("us-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  // Записуємо сформатовану дату в елемент з id "currentDate"
  currentDateId.textContent = formattedDate;
}
