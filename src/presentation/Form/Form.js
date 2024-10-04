import { recipeApiService } from "../../infrastructure/RecipeApiService";
import { dispatchRecipeAdded } from "../List/List";

// Формируем компонент формы
export function Form() {
  const form = document.createElement("form");
  const title = document.createElement("h2");
  const inputRecipeNumber = document.createElement("input");
  const selectDish = document.createElement("select");
  const button = document.createElement("button");

  // Заголовок формы
  title.innerText = "Рецепты для разнообразия вашего рациона";

  // Устанавливаем атрибуты для номера рецепта
  inputRecipeNumber.setAttribute("type", "number");
  inputRecipeNumber.setAttribute("placeholder", "Номер рецепта (от 1 до 10)");
  inputRecipeNumber.setAttribute("min", "1");
  inputRecipeNumber.setAttribute("max", "10");
  inputRecipeNumber.setAttribute("required", "true");

  // Формируем select для выбора типа блюда
  selectDish.setAttribute("name", "dishType");
  const dishOptions = [
    {
      value: "",
      text: "Выберите тип блюда",
      disabled: true,
      selected: true,
      hidden: true,
    },
    { value: "meat", text: "Блюда из мяса" },
    { value: "fish", text: "Блюда из рыбы" },
    { value: "vegetarian", text: "Вегетарианские блюда" },
    { value: "desserts", text: "Десерты" },
  ];

  dishOptions.forEach((optionData) => {
    const option = document.createElement("option");
    option.value = optionData.value;
    option.textContent = optionData.text;

    if (optionData.disabled) option.disabled = true;
    if (optionData.selected) option.selected = true;
    if (optionData.hidden) option.hidden = true;

    selectDish.appendChild(option);
  });

  // Кнопка отправки формы
  button.type = "submit";
  button.innerText = "Вперед!";

  // Обработчик отправки формы
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Получаем значения из формы
    const recipeNumber = parseInt(inputRecipeNumber.value.trim(), 10);
    const dishType = selectDish.value;

    // Валидация формы
    if (
      isNaN(recipeNumber) ||
      recipeNumber < 1 ||
      recipeNumber > 10 ||
      !dishType
    ) {
      alert("Пожалуйста, заполните все поля корректно.");
      return;
    }

    // Читаем рецепт с помощью API сервиса
    try {
      await recipeApiService.read(dishType);

      // Обновляем UI (например, перезагружаем список рецептов)
      dispatchRecipeAdded();
      alert("Рецепт успешно добавлен!");
    } catch (error) {
      console.error("Ошибка при создании рецепта:", error);
      alert("Произошла ошибка при создании рецепта.");
    }
  });

  // Добавляем элементы в форму
  form.appendChild(selectDish);
  form.appendChild(inputRecipeNumber);
  form.appendChild(button);

  return form;
}