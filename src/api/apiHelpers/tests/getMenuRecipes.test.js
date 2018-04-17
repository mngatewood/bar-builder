import { getMenuRecipes } from '../getMenuRecipes';
import { getRecipes } from '../../apiCalls/getRecipes';
import { filterMenuRecipes } from '../filterMenuRecipes';
import { getUniqueMenuRecipes } from '../getUniqueMenuRecipes';
import * as mock from '../../../mockData/mockData';
jest.mock('../../apiCalls/getRecipes');
jest.mock('../filterMenuRecipes');
jest.mock('../getUniqueMenuRecipes');

describe("getMenuRecipes", () => {

  it.skip("calls getRecipes with expected params", async () => {
    await getMenuRecipes(mock.mockInventory, mock.mockIngredientsList);
    expect(getRecipes).toHaveBeenCalled;
  });

  it.skip("calls filterMenuRecipes with expected params", async () => {
    await getMenuRecipes(mock.mockInventory, mock.mockIngredientsList);
    expect(filterMenuRecipes).toHaveBeenCalled;
  });

  it.skip("calls getUniqueMenuRecipes with expected params", () => {
    getMenuRecipes(mock.mockInventory, mock.mockIngredientsList);
    expect(filterMenuRecipes).toHaveBeenCalled;
  });

  it.skip("returns an array of recipes when status is ok", async () => {
    const expected = mock.mockRecipeArray;
    
    await expect(getRecipes(mock.mockInventory, mock.mockIngredientsList)).resolves.toEqual(expected);
  });

  it.skip("throws an error when status is not ok", () => {
    window.fetch = mock.mockFetchReject;
    const expected = Error("Error retrieving recipes: Something went wrong.");

    expect(getMenuRecipes(mock.mockInventory, mock.mockIngredientsList)).rejects.toEqual(expected);
  });
});


