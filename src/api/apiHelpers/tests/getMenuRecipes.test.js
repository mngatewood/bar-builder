import { getMenuRecipes } from '../getMenuRecipes';
import { getRecipes } from '../../apiCalls/getRecipes';
import { filterMenuRecipes } from '../filterMenuRecipes';
import { getUniqueMenuRecipes } from '../getUniqueMenuRecipes';
import * as mock from '../../../mockData/mockData';
jest.mock('../../apiCalls/getRecipes');
jest.mock('../filterMenuRecipes');
jest.mock('../getUniqueMenuRecipes');

describe("getMenuRecipes", () => {

  it("calls getRecipes with expected params", async () => {
    await getMenuRecipes(mock.mockInventory, mock.mockIngredientsList);
    expect(getRecipes).toHaveBeenCalled;
  });

  it("calls filterMenuRecipes with expected params", async () => {
    await getMenuRecipes(mock.mockInventory, mock.mockIngredientsList);
    expect(filterMenuRecipes).toHaveBeenCalled;
  });

  it("calls getUniqueMenuRecipes with expected params", () => {
    getMenuRecipes(mock.mockInventory, mock.mockIngredientsList);
    expect(filterMenuRecipes).toHaveBeenCalled;
  });

  it("returns an array of recipes when status is ok", async () => {
    const expected = mock.mockResponseRecipes;
    
    await expect(getRecipes(mock.mockInventory, mock.mockIngredientsList)).resolves.toEqual(expected);
  });

});


