import { updateFilterCount } from '../updateFilterCount';
import * as mock from '../../../mockData/mockData';

describe('updateFilterCount', () => {

  let category, ingredient, alcoholic;

  beforeEach(() => {

    category = [];
    ingredient = [];
    alcoholic = [];

  });

  it('returns 1 if one array is populated', () => {
    category = mock.mockSodaCategoryRecipes;

    expect(updateFilterCount(category, ingredient, alcoholic)).toEqual(1);
  });

  it('returns 2 if two arrays are populated', () => {
    category = mock.mockSodaCategoryRecipes;
    ingredient = mock.mockCocaColaIngredientRecipes;

    expect(updateFilterCount(category, ingredient, alcoholic)).toEqual(2);
  });

  it('returns 3 if three arrays are populated', () => {
    category = mock.mockSodaCategoryRecipes;
    ingredient = mock.mockCocaColaIngredientRecipes;
    alcoholic = mock.mockNonAlcoholicRecipes;

    expect(updateFilterCount(category, ingredient, alcoholic)).toEqual(3);
  });

});