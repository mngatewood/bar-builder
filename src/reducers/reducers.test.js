import alcoholicReducer from './alcoholicOptionsReducer';
import categoryReducer from './categoryReducer';
import ingredientReducer from './ingredientReducer';
import inventoryReducer from './inventoryReducer';
import menuReducer from './menuReducer';
import recipeReducer from './recipeReducer';
import * as actions from '../actions/index';
import * as mock from '../mockData/mockData';

describe('reducers', () => {

  describe('alcoholicOptionsReducer', () => {
    it('should return the default state', () => {
      const expected = [];
      expect(alcoholicReducer(undefined, {})).toEqual(expected);
    });

    it('should return a state with alcoholic options', () => {
      const alcoholicOptions = mock.sortedAlcoholicOptions;
      const expected = mock.sortedAlcoholicOptions;
      const action = actions.addAlcoholicOptions(alcoholicOptions);
      expect(alcoholicReducer(undefined, action)).toEqual(expected);
    });
  });

  describe('categoryReducer', () => {
    it('should return the default state', () => {
      const expected = [];
      expect(categoryReducer(undefined, {})).toEqual(expected);
    });

    it('should return a state with category options', () => {
      const categories = mock.sortedCategoryOptions;
      const expected = mock.sortedCategoryOptions;
      const action = actions.addCategories(categories);
      expect(categoryReducer(undefined, action)).toEqual(expected);
    });
  });

  describe('ingredientReducer', () => {
    it('should return the default state', () => {
      const expected = [];
      expect(ingredientReducer(undefined, {})).toEqual(expected);
    });

    it('should return a state with ingredient options', () => {
      const ingredients = mock.sortedIngredientOptions;
      const expected = mock.sortedIngredientOptions;
      const action = actions.addIngredients(ingredients);
      expect(ingredientReducer(undefined, action)).toEqual(expected);
    });
  });

  describe('inventoryReducer', () => {
    it('should return the default state', () => {
      const expected = [];
      expect(inventoryReducer(undefined, {})).toEqual(expected);
    });

    it('should return a state with an ingredient', () => {
      const ingredient = { strIngredient1: "water" };
      const expected = [{ strIngredient1: "water" }];
      const action = actions.addIngredient(ingredient);
      expect(inventoryReducer(undefined, action)).toEqual(expected);
    });

    it('should return a state with an additional ingredient', () => {
      const state = [{ strIngredient1: "water" }];
      const ingredient = { strIngredient1: "ice" };
      const expected = [{ strIngredient1: "water"}, { strIngredient1: "ice" }];
      const action = actions.addIngredient(ingredient);
      expect(inventoryReducer(state, action)).toEqual(expected);
    });

    it.skip('should return a state with ingredient removed', () => {
      const state = [{ strIngredient1: "water" }, { strIngredient1: "ice" }];
      let ingredient = { strIngredient1: "ice" };
      let expected = [{ strIngredient1: "water" }];
      const action = actions.removeIngredient(ingredient);
      expect(inventoryReducer(state, action)).toEqual(expected);
    });
  });

  describe('menuReducer', () => {
    it('should return the default state', () => {
      const expected = [];
      expect(menuReducer(undefined, {})).toEqual(expected);
    });

    it('should return a state with recipes', () => {
      let recipes = mock.mockRecipeArray;
      let expected = mock.mockRecipeArray;
      const action = actions.addMenuRecipes(recipes);
      expect(menuReducer(undefined, action)).toEqual(expected);
    });

    it('should return a state with all recipes removed', () => {
      const state = mock.mockRecipeArray;
      let expected = [];
      const action = actions.clearMenuRecipes();
      expect(menuReducer(state, action)).toEqual(expected);
    });
  });

  describe('recipeReducer', () => {
    it('should return the default state', () => {
      const expected = [];
      expect(recipeReducer(undefined, {})).toEqual(expected);
    });

    it('should return a state with recipes', () => {
      let recipes = mock.mockRecipeArray;
      let expected = mock.mockRecipeArray;
      const action = actions.addRecipes(recipes);
      expect(recipeReducer(undefined, action)).toEqual(expected);
    });

    it('should return a state with all recipes removed', () => {
      const state = mock.mockRecipeArray;
      let expected = [];
      const action = actions.clearRecipes();
      expect(recipeReducer(state, action)).toEqual(expected);
    });
  });

});