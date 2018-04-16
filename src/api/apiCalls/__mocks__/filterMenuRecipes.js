import { mockRecipeArray } from '../../../mockData/mockData';

export const filterMenuRecipes = jest.fn().mockImplementation(() => {
  return Promise.resolve(mockRecipeArray);
});
