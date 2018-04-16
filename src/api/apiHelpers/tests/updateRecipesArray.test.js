import { updateRecipesArray } from '../updateRecipesArray';
import * as mock from '../../../mockData/mockData';

describe('updateRecipesArray', () => {

  let category;
  let ingredient;
  let alcoholic;
  
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
      resolves.toEqual({ categoryRecipes: category })
  });

  it('returns an empty array if the filter value starts with All', () => {
    expect(updateRecipesArray("categoryFilter", "c", "All Categories")).
      resolves.toEqual({ categoryRecipes: [] })
  });

  it("throws an error when status is not ok", () => {
    window.fetch = mock.mockFetchReject;
    const expected = Error("Error retrieving options: Something went wrong.");

    expect(updateRecipesArray("categoryFilter", "c", "All Categories"))
      .rejects.toEqual(expected);
  });

})