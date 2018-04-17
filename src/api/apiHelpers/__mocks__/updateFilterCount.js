import { mockSortedMenuRecipeArray } from '../../../mockData/mockData';

export const updateFilterCount = jest.fn().mockImplementation(() => {
  return Promise.resolve( 1 );
});