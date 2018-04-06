const urlRoot = 'https://www.thecocktaildb.com/api/json/v1/1/';

export const getRecipes = async (filterType, filterValue) => {
  const urlQuery = 'filter.php?';
  const url = `${urlRoot}${urlQuery}${filterType}=${filterValue}`;
  try {
    const response = await fetch(url);
    const recipeSummary = await response.json();
    console.log(recipeSummary)
    const recipeDetails = await getRecipeDetails(recipeSummary.drinks);
    return recipeDetails;
  } catch (error) {
    throw Error("Error retrieving recipes");
  }
};

export const getRecipeDetails = (recipeArray) => {
  const urlQuery = 'lookup.php?i=';
  const promises = recipeArray.map( async recipe => {
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

