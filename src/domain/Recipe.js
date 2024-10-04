export class Recipe {
  #type; // возможно, не нужно
  #title; // состояние лучше инкапсулировать и возвращать его объектом (никто не сможет наши задачи изменить)
  #ingredient;
  #body;
  // #image;
  #author;
  #created_at;
  // #added_to_fav = false; //для чекбокса или кнопки сохранения в избранное

  constructor(
    type,
    title,
    ingredient,
    body,
    // image,
    author,
    created_at = new Date().getTime() // ?
  ) {
    this.#type = type;
    this.#title = title;
    this.#ingredient = ingredient;
    this.#body = body;
    // this.#image = image;
    this.#author = author;
    this.#created_at = created_at;
  }
  //метод выведения содержания карточки
  get recipeDto() {
    // data-transfer-objectэто геттер, специальная функция, которая обрабатывает данные и возвращает их наружу, чтобы мы могли воспользоваться этой информацией
    return {
      title: this.#title,
      ingredient: this.#ingredient,
      body: this.#body,
      // image: this.#image,
      author: this.#author,
      created_at: this.#created_at,
      // added_to_fav: this.#added_to_fav,
    };
  }
  //Безопасное изменение данных
  //const recipe = new Recipe();
  //const data = recipe.recipeDto;
  //data.content = ""; // можно поменять контент рецепта
  //console.log(data); // измененный
  //console.log(recipe.recipeDto) - здесь контент остается иммутабельным

  //Метод сохранения рецепта 
  serialize() {
    // возвращаем плоский объект, а не строки, как могли бы подумать исходя из названия метода
    return {
      type: this.#type,
      title: this.#title,
      ingredient: this.#ingredient,
      body: this.#body,
      // image: this.#image,
      author: this.#author,
      created_at: this.#created_at,
      // added_to_fav: this.#added_to_fav,
    };
  }
}
