import { RecipeList } from "../domain/RecipeList";
import { Recipe } from "../domain/Recipe";

const API_URL =
  "http://3.76.204.114/recipe-api/recipes/random/";

class RecipeApiService {
  //все, что мы сохранили на сервер, пусть кэшируется (сторидж не нужен)
  #cache;

  //Используем принцип разделения "чтения" и "записи"
  //Вместо промисов async await (ждем ответа сервера и получаем response)

  //Метод сохранения
  async save(recipe) {
    const response = await fetch(API_URL, {
      method: "POST",
      body: JSON.stringify(recipe.serialize()),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const data = await response.json(); // запишем ответ сервера (распарсим) и создадим новый рецепт

    const resultRecipe = new Recipe(
      data.title,
      data.ingredient,
      data.body,
      data.image,
      data.author,
      data.created_at
    );

    if (!this.#cache) {
      // если нет кэша, мы его создадим
      this.#cache = new RecipeList([]); // и добавим туда новый объект
    }

    this.#cache.addRecipe(resultRecipe); // и прикрепим туда c помощью нашего метода полученный с сервера рецепт
  }

  //Метод чтения
  async read(dishType) {
    if (!this.#cache) {
      this.#cache = new RecipeList([]);
    }

    // const response = await fetch(API_URL);
    //
    // const data = await response.json();

    return this.#cache; // кэшируется в момент, когда пришел удачный ответ
  }
}

export const recipeApiService = new RecipeApiService();
