export function Recipe(recipe) {
    const container = document.createElement("div");

    container.innerHTML = `
        <h2>${recipe.recipeDto.title}</h2>
    `;

    return container;
}
