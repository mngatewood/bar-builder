import { mockCategoryOptionsResponse } from '../../../mockData/mockData';

export const getFilterOptions = jest.fn().mockImplementation(() => {
  return Promise.resolve(mockCategoryOptionsResponse);
});
