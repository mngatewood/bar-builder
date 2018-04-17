/* eslint-disable camelcase */

import * as actions from './index';
import * as mock from '../mockData/mockData';

describe('actions', () => {

  describe('addRecipes', () => {
    it('creates a type of ADD_RECIPES', () => {

      const recipes = mock.mockRecipeArray;
      const expected = {
        type: 'ADD_RECIPES',
        recipes
      };

      expect(actions.addRecipes(recipes)).toEqual(expected);
    });
  });

  describe('clearRecipes', () => {
    it('creates a type of CLEAR_RECIPES', () => {

      const expected = {
        type: 'CLEAR_RECIPES'
      };

      expect(actions.clearRecipes()).toEqual(expected);
    });
  });

  describe('addCategories', () => {
    it('creates a type of ADD_CATEGORIES', () => {

      const categories = mock.sortedCategoryOptions;
      const expected = {
        type: 'ADD_CATEGORIES',
        categories
      };

      expect(actions.addCategories(categories)).toEqual(expected);
    });
  });

  describe('addIngredients', () => {
    it('creates a type of ADD_INGREDIENTS', () => {

      const ingredients = mock.sortedIngredientOptions;
      const expected = {
        type: 'ADD_INGREDIENTS',
        ingredients
      };

      expect(actions.addIngredients(ingredients)).toEqual(expected);
    });
  });

  describe('addAlcoholicOptions', () => {
    it('creates a type of ADD_ALCOHOLIC_OPTIONS', () => {

      const alcoholicOptions = mock.sortedAlcoholicOptions;
      const expected = {
        type: 'ADD_ALCOHOLIC_OPTIONS',
        alcoholicOptions
      };

      expect(actions.addAlcoholicOptions(alcoholicOptions)).toEqual(expected);
    });
  });

  describe('addIngredient', () => {
    it('creates a type of ADD_INGREDIENT', () => {

      const ingredient = { strIngredient1: "water" };
      const expected = {
        type: 'ADD_INGREDIENT',
        ingredient
      };

      expect(actions.addIngredient(ingredient)).toEqual(expected);
    });
  });

  describe('removeIngredient', () => {
    it('creates a type of REMOVE_INGREDIENT', () => {

      const ingredient = { strIngredient1: "water" };
      const expected = {
        type: 'REMOVE_INGREDIENT',
        ingredient
      };

      expect(actions.removeIngredient(ingredient)).toEqual(expected);
    });
  });

  describe('addMenuRecipes', () => {
    it('creates a type of ADD_MENU_RECIPES', () => {

      const recipes = mock.mockRecipeArray;
      const expected = {
        type: 'ADD_MENU_RECIPES',
        recipes
      };

      expect(actions.addMenuRecipes(recipes)).toEqual(expected);
    });
  });

  describe('clearMenuRecipes', () => {
    it('creates a type of CLEAR_MENU_RECIPES', () => {

      const expected = {
        type: 'CLEAR_MENU_RECIPES'
      };

      expect(actions.clearMenuRecipes()).toEqual(expected);
    });
  });

});