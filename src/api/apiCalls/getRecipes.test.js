import { getRecipes } from '../apiCalls/getRecipes';
import { getRecipeDetails } from '../../api/apiCalls/getRecipeDetails';
import * as mockData from '../../mockData/mockData';
jest.mock('../../api/apiCalls/getRecipeDetails');

describe("getRecipes", () => {

  let mockUrl;

  beforeEach(() => {

    // eslint-disable-next-line
    mockUrl = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Optional_alcohol"
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockData.mockFetchResponse)
      })
    );

  });
  
  it("calls fetch with expected params", () => {
    getRecipes("a", "Optional_alcohol");
    expect(window.fetch).toHaveBeenCalledWith(mockUrl);
  });

  it.skip("returns a recipe when status is ok", async () => {
    const expected = mockData.mockFetchResponse;
    await expect(getRecipes("a", "Optional_alcohol")).resolves.toEqual(expected);
  });

  it("throws an error when status is not ok", () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.reject({
        ok: false
      })
    );
    const expected = Error("Error retrieving recipes");

    expect(getRecipes(mockUrl)).rejects.toEqual(expected);
  });
});

