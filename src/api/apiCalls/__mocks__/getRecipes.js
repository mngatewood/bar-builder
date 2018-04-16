import { mockResponseRecipes } from '../../../mockData/mockData';

export const getRecipes = jest.fn().mockImplementation(() => {
  return Promise.resolve( mockResponseRecipes );
});