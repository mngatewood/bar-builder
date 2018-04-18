import { filterRecipes } from '../filterRecipes';
import * as mock from '../../../mockData/mockData';

describe("filterRecipes", () => {

  it("filters recipes when one filter is selected", () => {
    const mockUnfilteredRecipes = [...mock.mockSodaCategoryRecipes];
    const filterCount = 1;
    const expected = mockUnfilteredRecipes
    expect(filterRecipes(filterCount,
      mock.mockSodaCategoryRecipes,
      [],
      [],
      mockUnfilteredRecipes
    )).toEqual(expected);
  });

  it("filters recipes when two filters are selected", () => {
    const mockUnfilteredRecipes = mock.mockUnfilteredSodaCokeArray;
    const filterCount = 2;
    const expected = mock.mockFilteredSodaCocaArray;
    expect(filterRecipes(filterCount,
      mock.mockSodaCategoryRecipes,
      mock.mockCocaColaIngredientRecipes,
      [],
      mockUnfilteredRecipes
    )).toEqual(expected);
  });

  it("filters recipes when three filters are selected", () => {
    const mockUnfilteredRecipes = mock.mockUnfilteredSodaCokeNonArray;
    const filterCount = 3;
    const expected = mock.mockFilteredSodaCocaNonArray;
    expect(filterRecipes(filterCount,
      mock.mockSodaCategoryRecipes,
      mock.mockCocaColaIngredientRecipes,
      mock.mockNonAlcoholicRecipes,
      mockUnfilteredRecipes
    )).toEqual(expected);
  });

});
