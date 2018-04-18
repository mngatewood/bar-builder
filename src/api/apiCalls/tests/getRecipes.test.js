import { getRecipes } from '../getRecipes';
import * as mock from '../../../mockData/mockData';
jest.mock('../../apiCalls/getRecipeDetails');

describe("getRecipes", () => {

  let mockUrl;

  beforeEach(() => {

    // eslint-disable-next-line
    mockUrl = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Optional_alcohol"
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mock.mockResponseRecipes)
      })
    );

  });
  
  it("calls fetch with expected params", () => {
    getRecipes("filter", "a", "Optional_alcohol");
    expect(window.fetch).toHaveBeenCalledWith(mockUrl);
  });

  it("returns a recipe when status is ok", async () => {
    const expected = mock.mockResponseRecipes.results;
    await expect(getRecipes("filter", "a", "Optional_alcohol"))
      .resolves.toEqual(expected);
  });

  it("throws an error when status is not ok", () => {
    window.fetch = mock.mockFetchReject;
    const expected = Error("Error retrieving recipes: Something went wrong.");

    expect(getRecipes("category")).rejects.toEqual(expected);
  });
});

