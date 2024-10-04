import { recipeAdded } from "../../application/events";
import "./styles.sass";
import {readRecipes, recipes} from "./readRecipes.js";
import {Recipe} from "../Recipe/Recipe.js";

const list = document.createElement("div");

export function dispatchRecipeAdded() {
  list.dispatchEvent(recipeAdded);
}

export function List() {
  readRecipes();

  function renderList() {
    list.innerHTML = "";
    const items = document.createElement("div");

    items.className = "list__items";

    recipes.recipeList.forEach(recipe => {
      items.appendChild(Recipe(recipe));
    });

    list.appendChild(items);
  }

  list.addEventListener("recipeAdded", () => {
    renderList();
  });

  renderList();

  return list;
}
