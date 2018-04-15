import { getFilterOptions } from '../apiCalls/getFilterOptions';
import * as mock from '../../mockData/mockData';

describe("getRecipeDetails", () => {

  let mockUrl;

  beforeEach(() => {

    mockUrl = "https://www.thecocktaildb.com/api/json/v1/1/list.php?category=list";
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mock.mockCategoryOptionsResponse)
      })
    );
  });

  it("calls fetch with expected params", () => {
    getFilterOptions("category");
    expect(window.fetch).toHaveBeenCalledWith(mockUrl);
  });

  it("returns filter options when status is ok", async () => {
    const expected = mock.mockCategoryOptionsResponse.drinks;
    await expect(getFilterOptions("category")).resolves.toEqual(expected);
  });

  it("throws an error when status is not ok", () => {
    window.fetch = mock.mockFetchReject;
    const expected = Error("Error retrieving options: Something went wrong.");

    expect(getFilterOptions("category")).rejects.toEqual(expected);
  });
});
