import { mockSortedMenuRecipeArray } from '../../../mockData/mockData';

export const filterRecipes = jest.fn().mockImplementation(() => {
  return Promise.resolve( mockSortedMenuRecipeArray );
});