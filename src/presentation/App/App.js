//Это функция для объединения Form и List (по сути контейнер )
import { Form } from "../Form/Form";
import { List } from "../List/List";
import "./styles.sass";

export function App() {
  const app = document.createElement("div");

  app.className = "app";

  app.appendChild(Form());

  return app;
}
