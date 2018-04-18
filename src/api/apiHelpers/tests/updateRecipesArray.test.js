import { updateRecipesArray } from '../updateRecipesArray';
import * as mock from '../../../mockData/mockData';
jest.mock('../../apiCalls/getRecipes');

describe('updateRecipesArray', () => {

  let category;
  
  beforeEach(() => {

    category = mock.mockSodaCategoryRecipes;
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(category)
      })
    );
  });
  
  it('returns the array named in the arguments', () => {
    expect(updateRecipesArray("categoryFilter", "c", "Soft Drink / Soda")).
      resolves.toEqual({ categoryRecipes: mock.mockRecipeArray });
  });

  it('returns an empty array if the filter value starts with All', () => {
    expect(updateRecipesArray("categoryFilter", "c", "All Categories")).
      resolves.toEqual({ categoryRecipes: [] });
  });

});