import { recipeAdded } from "../../application/events"; //событие (events) уведомляет о том, что рецепты добавлены (событие позволяет добавлять ноые рецепты на страницу)
import "./styles.sass";
import {readRecipes, recipes} from "./readRecipes.js"; // 
import {Recipe} from "../Recipe/Recipe.js"; //функция отвечает за создание dom элементов 

const list = document.createElement("div"); //контейнер для всех рецептов 

export function dispatchRecipeAdded() { // функция отвечает за обновление интерфейса или какого-либо состояния и "сигнализирование" интерфейсу, что рецепты были добавлены.
  list.dispatchEvent(recipeAdded); // изменилось состояние, рецепты добавлены 
}

export function List() { // фабрика по созданию рецептов 
  readRecipes(); // функция внутри функции - внутреннее состояние (вызывается функция загружающая  рецепты с помощью api) и рецепты сохраняются в recipes (что находятся в readRecipes) 

  function renderList() { //функция очищает текущий list и создает новый элемент div c классом list-items 
    list.innerHTML = "";
    const items = document.createElement("div");

    items.className = "list__items";

    recipes.recipeList.forEach(recipe => { // перебор рецептов из массива и c помощью функции Recipe(recipe) отображающей рецепт возвращается соответсвующий элемент DOM
      items.appendChild(Recipe(recipe));
    });

    list.appendChild(items); //добавляются в контейнер 
  }

  list.addEventListener("recipeAdded", () => {
    renderList();
  });

  renderList();

  return list;
}
