import { filterRecipes } from '../filterRecipes';
import * as mock from '../../../mockData/mockData';

describe("getRecipes", () => {

  it("filters recipes when one filter is selected", () => {
    const mockUnfilteredRecipes = [...mock.mockSodaCategoryRecipes];
    const filterCount = 1;
    expect(filterRecipes(filterCount,
      mock.mockSodaCategoryRecipes,
      mock.mockCocaColaIngredientRecipes,
      mock.mockNonAlcoholicRecipes,
      mockUnfilteredRecipes
    )).toEqual(mock.mockFilteredRecipes1Filter);
  });

  it("filters recipes when two filters are selected", () => {
    const mockUnfilteredRecipes = [...mock.mockSodaCategoryRecipes,
      ...mock.mockCocaColaIngredientRecipes];
    const mockNonAlcoholicRecipes = [];
    const filterCount = 2;
    expect(filterRecipes(filterCount,
      mock.mockSodaCategoryRecipes,
      mock.mockCocaColaIngredientRecipes,
      mock.mockNonAlcoholicRecipes,
      mockUnfilteredRecipes
    )).toEqual(mock.mockFilteredRecipes2Filters);
  });

  it("filters recipes when three filters are selected", () => {
    const mockUnfilteredRecipes = [...mock.mockSodaCategoryRecipes,
      ...mock.mockCocaColaIngredientRecipes,
      ...mock.mockNonAlcoholicRecipes];
    const filterCount = 3;
    expect(filterRecipes(filterCount,
      mock.mockSodaCategoryRecipes,
      mock.mockCocaColaIngredientRecipes,
      mock.mockNonAlcoholicRecipes,
      mockUnfilteredRecipes
    )).toEqual(mock.mockFilteredRecipes3Filters);
  });

});
