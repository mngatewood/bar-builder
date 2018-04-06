import React from 'react';
import { getRecipes, getRecipeDetails } from '../apiCalls/getRecipes';
import { shallow } from 'enzyme';


describe("getRecipes", () => {
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

  it("calls fetch with expected params", () => {
    getRecipes();
    expect(window.fetch).toHaveBeenCalled();
  });

  it("returns a recipe when status is ok", async () => {
    const mockUrl = ;
    const expected = [
      {
      }
    ];
    await expect(getRecipes(mockUrl)).resolves.toEqual(expected);
  });

  it("throws an error when status is not ok", () => {
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

  it("calls fetch with expected params", () => {
    getRecipeDetails();
    expect(window.fetch).toHaveBeenCalled();
  });

  it("returns a movie object when status is ok", async () => {
    mockUrl = ;
    const expected = [
      {
      }
    ];
    await expect(getRecipeDetails(mockUrl)).resolves.toEqual(expected);
  });

  it("throws an error when status is not ok", () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.reject({
        ok: false
      })
    );
    const expected = Error("Error getting movies");

    expect(getRecipeDetails(mockUrl)).rejects.toEqual(expected);
  });
});
