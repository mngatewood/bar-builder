import { filterMenuRecipes } from '../filterMenuRecipes';
import * as mock from '../../../mockData/mockData';

describe('filterMenuRecipes', () => {

  it('should filter recipes passed as arguments', () => {
    expect(filterMenuRecipes(mock.mockInventory, 
      mock.mockIngredientsList, mock.mockRecipesToBeFiltered)).
      toEqual(mock.mockFilteredMenuRecipes);
  });

});