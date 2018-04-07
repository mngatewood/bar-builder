export const getRecipeDetails = (recipeArray) => {
  const urlRoot = 'https://www.thecocktaildb.com/api/json/v1/1/';
  const urlQuery = 'lookup.php?i=';
  const promises = recipeArray.map(async recipe => {
    try {
      const response = await fetch(`${urlRoot}${urlQuery}${recipe.idDrink}`);
      const recipeData = await response.json();
      const recipeDetails = await recipeData.drinks[0];
      return recipeDetails;
    } catch (error) {
      throw Error("Error retrieving recipe details");
    }
  });
  return Promise.all(promises);
};
