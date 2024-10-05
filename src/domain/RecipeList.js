export class RecipeList {
  #recipes = [];

  constructor(recipes) {
    this.#recipes = recipes; //ссылка на массив
  }
  //Метод получения рецептов (Можно заменить на map или reduce, если много данных)
  get recipeList() {
    return [...this.#recipes]; // получаем копию массива, чтобы наша коллекция оставалась иммутабельной
  }
  //Метод добавления рецепта на страницу
  addRecipe(recipe) {
    this.#recipes.push(recipe);
  }

}
