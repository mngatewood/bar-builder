import { sortMenuRecipes } from '../sortMenuRecipes';
import * as mock from '../../../mockData/mockData';

describe('sortMenuRecipes', () => {

  it('sorts an array of recipes by drink name', () => {
    expect(mock.mockUnsortedMenuRecipeArray.sort(sortMenuRecipes)).
      toEqual(mock.mockSortedMenuRecipesArray);
  });
});