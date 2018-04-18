import { sortAlcoholicOptions } from '../sortAlcoholicOptions';
import * as mock from '../../../mockData/mockData';

describe('sortAlcoholicOptions', () => {

  it('sorts an array of alcoholic options objects', () => {
    const unsorted = mock.unsortedAlcoholicOptions;
    expect(unsorted.sort(sortAlcoholicOptions)).
      toEqual(mock.sortedAlcoholicOptions);
  });
  
});
