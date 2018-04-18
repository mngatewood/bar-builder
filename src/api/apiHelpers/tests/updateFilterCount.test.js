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
    const props = {
      "categoryRecipes": category,
      "ingredientRecipes": ingredient,
      "alcoholicRecipes": alcoholic
    }

    expect(updateFilterCount(props)).toEqual({ filterCount: 1 });

  });

  it('returns 2 if two arrays are populated', () => {
    category = mock.mockSodaCategoryRecipes;
    ingredient = mock.mockCocaColaIngredientRecipes;
    const props = {
      "categoryRecipes": category,
      "ingredientRecipes": ingredient,
      "alcoholicRecipes": alcoholic
    }

    expect(updateFilterCount(props)).toEqual({ filterCount: 2 });

  });

  it('returns 3 if three arrays are populated', () => {
    category = mock.mockSodaCategoryRecipes
    ingredient = mock.mockCocaColaIngredientRecipes;
    alcoholic = mock.mockNonAlcoholicRecipes;
    const props = {
      "categoryRecipes": category,
      "ingredientRecipes": ingredient,
      "alcoholicRecipes": alcoholic
    };

    expect(updateFilterCount(props)).toEqual({ filterCount: 3 });

  });

});