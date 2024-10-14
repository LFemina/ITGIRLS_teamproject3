import "./styles.sass";

export function Recipe(recipe) {
  // функция отображает рецепт (принимает объект )
  const container = document.createElement("div"); // метод recipeDto

  container.innerHTML = `
        <div class="header">
          <img class="img" src="${recipe.recipeDto.image}">
          <h2 class="title">${recipe.recipeDto.title}</h2> 
        </div>
        <p class="content">${recipe.recipeDto.ingredient}</p>
        <p class="content">${recipe.recipeDto.body}</p>
    `;

  // добавляем классы
  container.className = 'result';

  document.getElementById('cake-display').style.display = 'none';
  document.getElementById('text-display').style.gridRow = '1/2'

  return container;
}
