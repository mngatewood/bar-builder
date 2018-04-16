import { getUniqueMenuRecipes } from '../getUniqueMenuRecipes';
import * as mock from '../../../mockData/mockData';

describe("getRecipeDetails", () => {

  it("removes duplicate recipes from an array", () => {
    expect(getUniqueMenuRecipes(mock.mockSortedArrayWithDuplicates))
      .toEqual(mock.mockSortedArrayWithNoDuplicates);
  });

});
