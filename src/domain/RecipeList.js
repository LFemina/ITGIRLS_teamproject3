export class RecipeList {
  #recipes = [];

  constructor(recipes) {
    this.#recipes = recipes; //ссылка на массив
  }
  //Метод получения рецептов (Нужно заменить на map или reduce)
  get recipeList() {
    // геттер
    return [...this.#recipes]; // получаем копию массива, чтобы наша коллекция оставалась иммутабельной
  }
  //Метод добавления рецепта на страницу
  addRecipe(recipe) {
    this.#recipes.push(recipe);
  }

  //Метод удаления рецептов из избранного (?)
  // delete() {
  //   this.#recipes = this.#recipes.filter(recipe => recipe.id !== recipe.id);
  // }
  //Сохраняем коллекцию в JSON (?)
  //   serialize() { // пройдемся по нашим рецептам и вернем сериализованный экземпляр (вернем массив строк)
  //     return JSON.stringify(this.#recipes.map((recipe) => recipe.serialize()));
  //   }
}

// // Это пример - Метод работы с полученным массивом данных например
// // const recipes = new Recipes();
// // recipes.recipeCard.array.forEach(element => {

// // });
