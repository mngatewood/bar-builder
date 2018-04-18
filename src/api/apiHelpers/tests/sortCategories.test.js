import { sortCategories } from '../sortCategories';
import * as mock from '../../../mockData/mockData';

describe('sortCategories', () => {

  it('sorts an array of category objects', () => {
    const unsorted = mock.unsortedCategoryOptions;
    expect(unsorted.sort(sortCategories)).
      toEqual(mock.sortedCategoryOptions);
  });

});
