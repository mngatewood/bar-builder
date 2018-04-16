import { mockSortedMenuRecipeArray } from '../../../mockData/mockData';

export const sortRecipes = jest.fn().mockImplementation(() => {
  return Promise.resolve( mockSortedMenuRecipeArray );
});