//Это функция для объединения Form и Card (по сути контейнер )
import { Form } from "../Form/Form";
import { List } from "../List/List";
import "./styles.sass";

export function App() {
  const app = document.createElement("div");

  app.className = "app";

  app.appendChild(Form());
  app.appendChild(List());

  return app;
}
