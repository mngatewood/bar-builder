export const filterMenuRecipes = (inventory, ingredients, recipes) => {
  return recipes.filter(recipe => {
    const entries = Object.entries(recipe);
    const ingredientKeys = entries.filter(entry => entry[0].startsWith("strIngredient"));
    const ingredientValues = ingredientKeys.map(ingredient => ingredient[1]);
    const ingredientsOptions = ingredients.map(ingredient => ingredient.strIngredient1);
    const allIngredientsMatch = ingredientValues.reduce((accumulator, currentValue) => {
      if (inventory.indexOf(currentValue) >= 0) {
        return accumulator;
      }
      if (ingredientsOptions.indexOf(currentValue) < 0) {
        return accumulator;
      }
      return accumulator - 1;
    }, 1);
    return allIngredientsMatch > 0;
  });
}
