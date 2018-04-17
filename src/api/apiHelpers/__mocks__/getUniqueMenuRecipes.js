import { mockRecipeArray } from '../../../mockData/mockData';

export const getUniqueMenuRecipes = jest.fn().mockImplementation(() => {
  return Promise.resolve(mockRecipeArray);
});
