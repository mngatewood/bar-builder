import { getRecipeDetails } from '../getRecipeDetails';
import * as mock from '../../../mockData/mockData';

describe("getRecipeDetails", () => {

  beforeEach(() => {

    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mock.mockRecipeDetails)
      })
    );
  });

  it("calls fetch with expected params", () => {
    const mockURL = 
      "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=13056";
    getRecipeDetails(mock.mockRecipeArray);
    expect(window.fetch).toHaveBeenCalledWith(mockURL);
  });

  it("returns an array of recipe details when status is ok", async () => {
    const expected = mock.mockRecipeDetails.drinks;
    await expect(getRecipeDetails(mock.mockRecipeArray))
      .resolves.toEqual(expected);
  });

  it("throws an error when status is not ok", () => {
    window.fetch = mock.mockFetchReject;
    const expected = 
      Error("Error retrieving recipe details: Something went wrong.");

    expect(getRecipeDetails(mock.mockRecipeArray))
      .rejects.toEqual(expected);
  });
});
