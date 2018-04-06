import React from 'react';
import { getRecipes, getRecipeDetails } from '../apiCalls/getRecipes';
import { shallow } from 'enzyme';
import * as mockData from '../../mockData/mockData';


describe("getRecipes", () => {
  let mockUrl;
  let mockRecipeData;

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockData.mockFetchResponse)
      })
    );
  });

  it.skip("calls fetch with expected params", () => {
    getRecipes();
    expect(window.fetch).toHaveBeenCalled();
  });

  it.skip("returns a recipe when status is ok", async () => {
    // const mockUrl
    // const expected = [
    //   {
    //   }
    // ];
    await expect(getRecipes(mockUrl)).resolves.toEqual(expected);
  });

  it.skip("throws an error when status is not ok", () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.reject({
        ok: false
      })
    );
    const expected = Error("Error retrieving recipes");

    expect(getMovies(mockUrl)).rejects.toEqual(expected);
  });
});

describe("getRecipeDetails", () => {
  let mockUrl;
  let mockMovieData;

  beforeEach(() => {

    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockMovieData)
      })
    );
  });

  it.skip("calls fetch with expected params", () => {
    getRecipeDetails();
    expect(window.fetch).toHaveBeenCalled();
  });

  it.skip("returns a movie object when status is ok", async () => {
    // mockUrl = ;
    // const expected = [
    //   {
    //   }
    // ];
    await expect(getRecipeDetails(mockUrl)).resolves.toEqual(expected);
  });

  it.skip("throws an error when status is not ok", () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.reject({
        ok: false
      })
    );
    const expected = Error("Error getting movies");

    expect(getRecipeDetails(mockUrl)).rejects.toEqual(expected);
  });
});
