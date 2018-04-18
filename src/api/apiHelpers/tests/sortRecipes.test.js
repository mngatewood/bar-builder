import { sortRecipes } from '../sortRecipes';
import * as mock from '../../../mockData/mockData';

describe('sortRecipes', () => {

  it('merges three filtered arrays into one sorted array', () => {
    expect(sortRecipes({
      categoryRecipes: mock.mockSodaCategoryRecipes,
      ingredientRecipes: mock.mockCocaColaIngredientRecipes,
      alcoholicRecipes: mock.mockNonAlcoholicRecipes
    })).
      toEqual({ unfilteredRecipes: mock.mockUnfilteredRecipes });
  });

})