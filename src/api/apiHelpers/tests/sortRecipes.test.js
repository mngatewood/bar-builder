import { sortRecipes } from '../sortRecipes';
import * as mock from '../../../mockData/mockData';

describe('sortRecipes', () => {

  it('merges three filtered arrays into one sorted array', () => {
    expect(sortRecipes(
      mock.mockSodaCategoryRecipes,
      mock.mockCocaColaIngredientRecipes,
      mock.mockNonAlcoholicRecipes
    )).
      toEqual(mock.mockUnfilteredRecipes);
  });

})