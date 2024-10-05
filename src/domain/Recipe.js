export class Recipe { //класс - это модель и шаблон для объекта (используется в RecipeApiService при создании нового экземпляра класса, который инкапсулирует данные рецепта, полученные с сервера
  
  #id;
  #type; // возможно, не нужно
  #title; // состояние лучше инкапсулировать и возвращать его объектом (никто не сможет наши задачи изменить)
  #ingredient;
  #body;
  #image;
  #author;
  #created_at;
 

  constructor( //конструктор - фукнция, создающая объекты, принимает на вход параметры)
    id,
    type,
    title,
    ingredient,
    body,
    image,
    author,
    created_at = new Date().getTime() // ?
  ) {
    this.#id = id;
    this.#type = type;
    this.#title = title;
    this.#ingredient = ingredient;
    this.#body = body;
    this.#image = image;
    this.#author = author;
    this.#created_at = created_at;
  }

  static fromApi(
    {
      id,
      title,
      type,
      ingredient,
      body,
      image,
      author,
      created_at
  }

){ 
  return new Recipe(id, type, title, ingredient, body, image, author, created_at);

  }
  //метод выведения содержания карточки(используется в presentation - recipe)
  get recipeDto() {
    // data-transfer-object это геттер, специальная функция, которая обрабатывает данные и возвращает их наружу, чтобы мы могли воспользоваться этой информацией
    return {

      title: this.#title,
      ingredient: this.#ingredient,
      body: this.#body,
      image: this.#image,
      author: this.#author,
      created_at: this.#created_at,
    };
  }

  //Метод сохранения рецепта 
  serialize() {
    // возвращаем плоский объект, а не строки, как могли бы подумать исходя из названия метода (используется в RecipeApiService при запросе post)
    return {
      type: this.#type,
      title: this.#title,
      ingredient: this.#ingredient,
      body: this.#body,
      // image: this.#image,
      author: this.#author,
      created_at: this.#created_at,
    };
  }
}
