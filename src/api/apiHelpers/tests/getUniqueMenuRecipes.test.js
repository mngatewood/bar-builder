import { getUniqueMenuRecipes } from '../getUniqueMenuRecipes';
import * as mock from '../../../mockData/mockData';

describe("getUniqueMenuRecipes", () => {

  it("removes duplicate recipes from an array", () => {
    expect(getUniqueMenuRecipes(mock.mockSortedArrayWithDuplicates))
      .toEqual(mock.mockSortedArrayWithNoDuplicates);
  });

});
