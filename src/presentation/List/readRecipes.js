import {RecipeList} from "../../domain/RecipeList.js";
import {recipeApiService} from "../../infrastructure/RecipeApiService.js";
import {dispatchRecipeAdded} from "./List.js";
import {Recipe} from "../../domain/Recipe.js";

let recipes = new RecipeList([]);

export function readRecipes() {
    recipeApiService.read().then((recipesFromApi) => {
        // recipes = recipesFromApi;

        recipes = new RecipeList([
            new Recipe(
                'type',
                'title',
                'ingredient',
                'body',
                'author'
            ),
        ])

        dispatchRecipeAdded();
    });
}

export { recipes };