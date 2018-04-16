import { updateFilterCount } from '../updateFilterCount';
import * as mock from '../../../mockData/mockData';

describe('updateFilterCount', () => {

  it('returns the number of populated filter arrays', () => {
    let category = mock.mockSodaCategoryRecipes
    let ingredient = [];
    let alcoholic = [];

    expect(updateFilterCount(category, ingredient, alcoholic)).
      toEqual({ filterCount: 1 });

    ingredient = mock.mockCocaColaIngredientRecipes;

    expect(updateFilterCount(category, ingredient, alcoholic)).
      toEqual({ filterCount: 2 });

    alcoholic = mock.mockNonAlcoholicRecipes;

    expect(updateFilterCount(category, ingredient, alcoholic)).
      toEqual({ filterCount: 3 });

  });

});