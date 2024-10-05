import { RecipeList } from "../domain/RecipeList";
import { Recipe } from "../domain/Recipe";

const API_URL =
  "http://3.76.204.114/recipe-api/recipes/random/";

class RecipeApiService { 
   

  //Используем принцип разделения "чтения" и "записи"
  //Вместо промисов async await (ждем ответа сервера и получаем response)

  //Метод сохранения (метод post, в теле которого отправляются данные рецепта, преобразованные с помощью JSON.stringify (recipe.serialize)) 
  async save(recipe) { // это промис
    const response = await fetch(API_URL, {
      method: "POST",
      body: JSON.stringify(recipe.serialize()),
      headers: {
        "Content-type": "application/json; charset=UTF-8", //заголовок указывает на то, что тело запроса содержит json 
      },
    });

    const data = await response.json(); // запишем ответ сервера (распарсим) и создадим новый object  

    const resultRecipe = new Recipe( // создаем новый экземпляр класса, который инкапсулирует данные рецепта, полученные с сервера 
      data.title,
      data.ingredient,
      data.body,
      data.image,
      data.author,
      data.created_at
    );
     
  }

  async read(dishType) {

    const response = await fetch(API_URL);
    
    const data = await response.json();

    return Recipe.fromApi(data);
  }
}

export const recipeApiService = new RecipeApiService();
