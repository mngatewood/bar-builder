import { mockRecipeArray } from '../../../mockData/mockData';

export const getMenuRecipes = jest.fn().mockImplementation(() => {
  return Promise.resolve(mockRecipeArray);
});
