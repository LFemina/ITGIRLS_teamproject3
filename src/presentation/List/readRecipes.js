import { RecipeList } from "../../domain/RecipeList.js";
import { recipeApiService } from "../../infrastructure/RecipeApiService.js";
import { dispatchRecipeAdded } from "./List.js";
import { Recipe } from "../../domain/Recipe.js";


//функция читает апи и бросает рецепт в новый массив
let recipes = new RecipeList([]); // массив

export function readRecipes() {//функция вызывает метод read(), чтобы получить рецепты от апи
  recipeApiService.read().then((recipesFromApi) => { //после того как сервер вернет ответ, он будет передан d then в виде переменной recipesFromApi
    // recipes = recipesFromApi; // а это результат апи записанный в пустой массив

    recipes = new RecipeList([ //здесь создаем новый объект, в который добавляется один рецепт с фиксированными значениями (это временная заглушка)
      new Recipe("type", "title", "ingredient", "body", "author"),
    ]);

    dispatchRecipeAdded(); //вызывает функцию, которая вероятно уведомляет приложение о том, что в список рецептов был добавлен новый рецепт. Возможно, эта функция обновляет состояние ui или делает другие действия для отображения изменений
  });
}

export { recipes }; // экспортируем экземпляр объекта 
