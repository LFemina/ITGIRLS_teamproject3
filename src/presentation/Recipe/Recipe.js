export function Recipe(recipe) {
  // функция отображает рецепт (принимает объект )
  const container = document.createElement("div"); // метод recipeDto

  container.innerHTML = `
        <h2>${recipe.recipeDto.title}</h2> 
        <p>${recipe.recipeDto.ingredient}</p>
        <p>${recipe.recipeDto.body}</p>
    `;

  return container;
}
