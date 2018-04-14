export const filterMenuRecipes = (inventory, recipes) => {
  return recipes.filter(recipe => {
    const entries = Object.entries(recipe);
    const ingredientKeys = entries.filter(entry => entry[0].startsWith("strIngredient"));
    const ingredientValues = ingredientKeys.map(ingredient => ingredient[1]);
    const allIngredientsMatch = ingredientValues.reduce((accumulator, currentValue) => {
      if (currentValue === "" || null) {
        return accumulator;
      } else if (inventory.indexOf(currentValue) >= 0) {
        return accumulator;
      } else {
        return accumulator - 1;
      }
    }, 1);
    return allIngredientsMatch > 0;
  });
}
