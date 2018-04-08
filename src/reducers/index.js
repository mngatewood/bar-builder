import { combineReducers } from 'redux';
import recipes from './recipeReducer';
import categories from './categoryReducer';
import ingredients from './ingredientReducer';
import inventory from './inventoryReducer';
import alcoholicOptions from './alcoholicOptionsReducer';

const rootReducer = combineReducers({
  recipes,
  categories,
  ingredients,
  alcoholicOptions,
  inventory
});

export default rootReducer;