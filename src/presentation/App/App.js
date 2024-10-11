//Это функция для объединения Form и List (по сути контейнер )
import { Form } from "../Form/Form";
import { List } from "../List/List";
import "./styles.sass";

export function App() {
  // контейнер с заголовками, вмещающий в себя форму, сообщение о загрузке, ответе и ошибке
  const app = document.createElement("div");

  // создаём ещё один div, в нём будет заголовок h2
  const titleForm =  document.createElement('div');

  // создаём заголовки, помещаем их в контейнеры
  const titleDoc = document.createElement('h1');
  const titleFormH2 = document.createElement('h2');
  titleForm.appendChild(titleFormH2);

  ///создаём div для сообщения о загрузке данных с сервера - вроде тут лолжно быть
  const loading = document.createElement('div');

  //помещаем все элементы в container
  app.appendChild(titleDoc);
  app.appendChild(titleForm);
  app.appendChild(loading); // если отдельно - добавить как функцию
  //app.appendChild(errorDiv); // если отдельно - добавить как функцию
  app.appendChild(Form());

  // добавляем классы и контент
  app.className = "container";
  titleDoc.innerText = "Готовые рецепты для разнообразия вашего рациона"; // заголовок страницы
  titleForm.className = 'title'; // контейнер для h2
  titleFormH2.textContent = 'Не знаете что приготовить? Предлагаем Вам на выбор готовые рецепты!'; // h2
  
  // контейнер с сообщением о загрузке
  loading.id = 'loading';
  loading.className = 'reqItems';
  loading.style.display = 'none';
  loading.textContent = 'Идёт загрузка...';

  return app;
}
