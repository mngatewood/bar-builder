import { getRecipeDetails } from './getRecipeDetails';

export const getRecipes = async (queryType, filterType, filterValue) => {
  const urlRoot = 'https://www.thecocktaildb.com/api/json/v1/1/';
  const urlQuery = `${queryType}.php`;
  const urlValue = queryType === 'random' ?
    '' :
    `?${filterType}=${filterValue}`;
  const url = `${urlRoot}${urlQuery}${urlValue}`;
  try {
    const response = await fetch(url);
    const recipeSummary = await response.json();
    const recipeDetails = await getRecipeDetails(recipeSummary.drinks);
    return recipeDetails;
  } catch (error) {
    throw Error("Error retrieving recipes");
  }
};


