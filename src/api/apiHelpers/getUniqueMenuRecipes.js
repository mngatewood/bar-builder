export const getUniqueMenuRecipes = (sortedMenuRecipes) => {
  let uniqueRecipes = [];
  let lastRecipeID = 0;
  sortedMenuRecipes.forEach((thisRecipe) => {
    if (thisRecipe.idDrink !== lastRecipeID) {
      uniqueRecipes.push(thisRecipe);
    }
    lastRecipeID = thisRecipe.idDrink;
  });
  return uniqueRecipes;
};