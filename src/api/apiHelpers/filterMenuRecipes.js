export const filterMenuRecipes = (inventory, ingredients, recipes) => {
  return recipes.filter(recipe => {
    const inventoryLowerCase = 
      inventory.map(ingredient => ingredient.toLowerCase());
    const entries = Object.entries(recipe);
    const ingredientKeys = 
      entries.filter(entry => entry[0].startsWith("strIngredient"));
    const ingredientValues = ingredientKeys.map(ingredient => ingredient[1]);
    const ingredientsOptions = 
      ingredients.map(ingredient => ingredient.strIngredient1.toLowerCase());
    const allIngredientsMatch = 
      ingredientValues.reduce((accumulator, currentValue) => {
        if (currentValue === '' || currentValue === null) {
          return accumulator;
        }
        if (inventoryLowerCase.indexOf(currentValue.toLowerCase()) >= 0) { 
          return accumulator;
        }
        if (ingredientsOptions.indexOf(currentValue.toLowerCase()) < 0) { 
          return accumulator;
        }
        return accumulator - 1;
      }, 1);
    return allIngredientsMatch > 0;
  });
};
