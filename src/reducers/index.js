import { combineReducers } from 'redux';
import recipes from './recipeReducer';
import categories from './recipeReducer';
import ingredients from './recipeReducer';
import alcoholicOptions from './recipeReducer';

const rootReducer = combineReducers({
  recipes,
  categories,
  ingredients,
  alcoholicOptions

});

export default rootReducer;