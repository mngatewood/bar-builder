import { mockFetchResponse } from '../../../mockData/mockData';

export const getRecipeDetails = jest.fn().mockImplementation(() => {
  return Promise.resolve(mockFetchResponse);
});
