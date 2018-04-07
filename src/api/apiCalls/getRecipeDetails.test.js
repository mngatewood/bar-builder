import { getRecipeDetails } from '../apiCalls/getRecipeDetails';
import * as mockData from '../../mockData/mockData';

describe("getRecipeDetails", () => {

  let mockUrl;

  beforeEach(() => {

    mockUrl = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=12864";
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockData.mockFetchResponse)
      })
    );
  });

  it.skip("calls fetch with expected params", () => {
    getRecipeDetails(mockData.mockRecipeArray);
    expect(window.fetch).toHaveBeenCalled();
  });

  it.skip("returns recipe details when status is ok", async () => {
    const expected = mockData.mockRecipeDetails;
    await expect(getRecipeDetails(mockData.mockRecipeArray)).resolves.toEqual(expected);
  });

  it("throws an error when status is not ok", () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.reject({
        ok: false
      })
    );
    const expected = Error("Error retrieving recipe details");

    expect(getRecipeDetails(mockData.mockRecipeArray)).rejects.toEqual(expected);
  });
});
