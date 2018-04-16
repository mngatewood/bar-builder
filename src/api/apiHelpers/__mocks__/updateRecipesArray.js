import { mockUnsortedMenuRecipeArray } from '../../../mockData/mockData';

export const updateRecipesArray = jest.fn().mockImplementation(() => {
  return Promise.resolve({ "categoryRecipes": mockUnsortedMenuRecipeArray });
});