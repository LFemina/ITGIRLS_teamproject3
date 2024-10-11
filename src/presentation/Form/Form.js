import { recipeApiService } from "../../infrastructure/RecipeApiService";
import { Recipe } from "../Recipe/Recipe.js";
import { errorHandler } from "../Error/errorHandler.js";
import { UserError } from "../../domain/ErrorClases.js";
import { ApiError } from "../../domain/ErrorClases.js";
import { CreateConteiner } from "../Error/errorConteinerCreate.js";
import "./styles.sass";

// Формируем компонент формы
export function Form() {
  //это был div --> request
  const container = document.createElement("div");

  //создаём саму форму
  const form = document.createElement("form");

  // добавляем её в container
  container.appendChild(form);

  // создаём элементы самой формы
  const label = document.createElement('label');
  /*const inputRecipeNumber = document.createElement("input"); - оказался не нужен, возвращает random*/
  const selectDish = document.createElement("select");
  const button = document.createElement("button");

  /*Устанавливаем атрибуты для номера рецепта
  inputRecipeNumber.setAttribute("type", "number");
  inputRecipeNumber.setAttribute("placeholder", "Номер рецепта (от 1 до 10)");
  inputRecipeNumber.setAttribute("min", "1");
  inputRecipeNumber.setAttribute("max", "10");
  inputRecipeNumber.setAttribute("required", "true");*/

  // Формируем select для выбора типа блюда
  selectDish.setAttribute("name", "dishType");
  const dishOptions = [
    {
      value: "",
      text: "Выберите основное меню:",
      disabled: true,
      selected: true,
      hidden: true,
    },
    { value: "Meat", text: "Блюда из мяса" },
    { value: "Chicken", text: "Блюда из курицы" },
    { value: "Fish", text: "Блюда из рыбы" },
    { value: "Vegetarian", text: "Вегетарианские блюда" },
    { value: "Desserts", text: "Десерты" },
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

  // присваиваем классы и id всем элементам на странице, добавляем контент
  form.className = 'request'; // контейнер для формы

  // label для select
  label.htmlFor = 'entity';
  label.className = 'label';
  label.textContent = 'Что вы хотите приготовить?';
  // select
  selectDish.id = 'entity';
  // Кнопка отправки формы
  button.type = "submit";
  button.className = 'fetchBtn';
  button.innerText = "Вперед!";

  // Обработчик отправки формы
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    container.innerHTML = "";
    container.appendChild(form);

 // Получаем значения из формы
  // const recipeNumber = parseInt(inputRecipeNumber.value.trim(), 10);
  const dishType = selectDish.value;

    try {
      // Валидация формы
    if (!dishType) {
      throw new UserError("Пожалуйста, выберите тип блюда."); //Выбрасываем ошибку
    }

    // Читаем рецепт с помощью API сервиса
    const recipe = await recipeApiService.read(dishType);
      if (!recipe){
        throw new Error("Ошибка при получении данных.");
  }
    container.appendChild(Recipe(recipe));
    } catch (error) {
      container.appendChild(CreateConteiner()); //Создаем контейнер для ошибки
      errorHandler(error); //Обработчик кладет ошибку в контейнер
    }
  });

  // Добавляем элементы в форму
  form.appendChild(label);
  form.appendChild(selectDish);
  /*form.appendChild(inputRecipeNumber);*/
  form.appendChild(button);

  return container;
}
