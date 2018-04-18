import { getRecipes } from '../apiCalls/getRecipes';
jest.mock('../apiCalls/getRecipes');

export const updateRecipesArray = async (name, type, value) => {
  const newRecipes = value.slice(0, 3) === 'All' || null ?
    [] :
    await getRecipes('filter', type, value);
  const sortedRecipes = newRecipes.sort((drinkA, drinkB) =>
    drinkA.idDrink - drinkB.idDrink);
  switch (name) {
  case 'categoryFilter': return { categoryRecipes: sortedRecipes };
  case 'ingredientFilter': return { ingredientRecipes: sortedRecipes };
  case 'alcoholicFilter': return { alcoholicRecipes: sortedRecipes };
  default: break;
  }
};

