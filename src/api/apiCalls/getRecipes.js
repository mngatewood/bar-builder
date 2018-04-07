import { getRecipeDetails } from './getRecipeDetails'

export const getRecipes = async (filterType, filterValue) => {
  const urlRoot = 'https://www.thecocktaildb.com/api/json/v1/1/';
  const urlQuery = 'filter.php?';
  const url = `${urlRoot}${urlQuery}${filterType}=${filterValue}`;
  // console.log(url)
  try {
    const response = await fetch(url);
    const recipeSummary = await response.json();
    const recipeDetails = await getRecipeDetails(recipeSummary.drinks);
    return recipeDetails;
  } catch (error) {
    throw Error("Error retrieving recipes");
  }
};


