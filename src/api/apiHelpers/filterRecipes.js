export const filterRecipes = async (props) => {
  const { filterCount, categoryRecipes, ingredientRecipes, alcoholicRecipes, unfilteredRecipes } = props;
  let filteredRecipes;
  
  if (filterCount === 1) {
    if (categoryRecipes.length > 0) { filteredRecipes = categoryRecipes; }
    if (ingredientRecipes.length > 0) { filteredRecipes = ingredientRecipes; }
    if (alcoholicRecipes.length > 0) { filteredRecipes = alcoholicRecipes; }
  }

  if (filterCount === 2) {
    filteredRecipes = [];
    let lastRecipeID = 0;
    unfilteredRecipes.forEach((thisRecipe) => {
      if (thisRecipe.idDrink === lastRecipeID) {
        filteredRecipes.push(thisRecipe);
      }
      lastRecipeID = thisRecipe.idDrink;
    });
  }

  if (filterCount === 3) {
    filteredRecipes = [];
    let lastRecipeID = 0;
    let twoRecipeID = 0;
    unfilteredRecipes.forEach((thisRecipe) => {
      if (thisRecipe.idDrink === twoRecipeID) {
        filteredRecipes.push(thisRecipe);
      }
      twoRecipeID = lastRecipeID;
      lastRecipeID = thisRecipe.idDrink;
    });
  }
  return filteredRecipes;
};
