import { getMenuRecipes } from '../getMenuRecipes';
import { getRecipes } from '../../apiCalls/getRecipes';
import { filterMenuRecipes } from '../filterMenuRecipes';
import * as mock from '../../../mockData/mockData';
jest.mock('../../apiCalls/getRecipes');
jest.mock('../filterMenuRecipes');
jest.mock('../getUniqueMenuRecipes');

describe("getMenuRecipes", () => {

  it("calls getRecipes with expected params", async () => {
    await getMenuRecipes(["Grenadine"], mock.mockIngredientsList);
    expect(getRecipes).toHaveBeenCalledWith("filter", "i", "Grenadine");
  });

  it("calls filterMenuRecipes with expected params", async () => {
    await getMenuRecipes(mock.mockInventory, mock.mockIngredientsList);
    expect(filterMenuRecipes).toHaveBeenCalled;
  });

  it("calls getUniqueMenuRecipes with expected params", () => {
    getMenuRecipes(mock.mockInventory, mock.mockIngredientsList);
    expect(filterMenuRecipes).toHaveBeenCalled;
  });

  it("returns an array of recipes when status is ok", () => {
    const expected = mock.mockRecipeArray;
    
    expect(getRecipes(mock.mockInventory, mock.mockIngredientsList))
      .resolves.toEqual(expected);
  });

});


