import { sortIngredients } from '../sortIngredients';
import * as mock from '../../../mockData/mockData';

describe('sortIngredients', () => {

  it('sorts an array of ingredient objects', () => {
    const unsorted = mock.unsortedIngredientOptions;
    expect(unsorted.sort(sortIngredients)).
      toEqual(mock.sortedIngredientOptions);
  });

});
