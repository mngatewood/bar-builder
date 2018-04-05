const urlRoot = 'https://www.thecocktaildb.com/api/json/v1/1/';

export const getRecipes = async (filterType, filterValue) => {
  const urlQuery = 'filter.php?';
  const url = `${urlRoot}${urlQuery}${filterType}=${filterValue}`;
  try {
    const response = await fetch(url);
    const recipeSummary = await response.json();
    const recipeDetails = await getRecipeDetails(recipeSummary.drinks);
    console.log(recipeDetails);
    return recipeDetails;
  } catch (error) {
    throw Error("Error retrieving recipe summaries");
  }
};

const getRecipeDetails = async (recipeArray) => {
  const urlQuery = 'lookup.php?i=';
  const promises = recipeArray.map(recipe => {
    return fetch(`${urlRoot}${urlQuery}${recipe.idDrink}`)
      .then(response => response.json())
      .then(recipeDetails => recipeDetails.drinks[0])
      .catch(error => (error));
  });
  return Promise.all(promises);
};

