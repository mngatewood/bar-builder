import React from 'react';
import './RecipeContainer.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Recipe } from '../Recipe/Recipe';

export const RecipeContainer = ({recipes}) => {
  const displayRecipe = recipes.map(recipe => {
    return <Recipe
      key={recipe.idDrink}
      name={recipe.strDrink}
      category={recipe.strCategory}
      alcoholic={recipe.strAlcoholic}
      glass={recipe.strGlass}
      instructions={recipe.strInstructions}
      thumbnail={recipe.strDrinkThumb}
      ingredient1={recipe.strIngredient1}
      measure1={recipe.strMeasure1}
      ingredient2={recipe.strIngredient2}
      measure2={recipe.strMeasure2}
      ingredient3={recipe.strIngredient3}
      measure3={recipe.strMeasure3}
      ingredient4={recipe.strIngredient4}
      measure4={recipe.strMeasure4}
      ingredient5={recipe.strIngredient5}
      measure5={recipe.strMeasure5}
      ingredient6={recipe.strIngredient6}
      measure6={recipe.strMeasure6}
      ingredient7={recipe.strIngredient7}
      measure7={recipe.strMeasure7}
      ingredient8={recipe.strIngredient8}
      measure8={recipe.strMeasure8}
      ingredient9={recipe.strIngredient9}
      measure9={recipe.strMeasure9}
      ingredient10={recipe.strIngredient10}
      measure10={recipe.strMeasure10}
      ingredient11={recipe.strIngredient11}
      measure11={recipe.strMeasure11}
      ingredient12={recipe.strIngredient12}
      measure12={recipe.strMeasure12}
      ingredient13={recipe.strIngredient13}
      measure13={recipe.strMeasure13}
      ingredient14={recipe.strIngredient14}
      measure14={recipe.strMeasure14}
      ingredient15={recipe.strIngredient15}
      forceDetails={false} />;
  });

  return <div className="filtered-container">
    <div className="page-title-wrapper">
      <div className="page-title">
        <h2>Filtered Recipes</h2>
      </div>
    </div>
    <div className="recipe-container">
      {displayRecipe}
    </div>
  </div>;
};

export const mapStateToProps = state => ({
  recipes: state.recipes
});

RecipeContainer.propTypes = {
  recipes: PropTypes.array,
  idDrink: PropTypes.number,
  strDrink: PropTypes.string,
  strCategory: PropTypes.string,
  strAlcoholic: PropTypes.string,
  strGlass: PropTypes.string,
  strInstructions: PropTypes.string,
  strDrinkThumb: PropTypes.string,
  strIngredient1: PropTypes.string,
  strMeasure1: PropTypes.string,
  strIngredient2: PropTypes.string,
  strMeasure2: PropTypes.string,
  strIngredient3: PropTypes.string,
  strMeasure3: PropTypes.string,
  strIngredient4: PropTypes.string,
  strMeasure4: PropTypes.string,
  strIngredient5: PropTypes.string,
  strMeasure5: PropTypes.string,
  strIngredient6: PropTypes.string,
  strMeasure6: PropTypes.string,
  strIngredient7: PropTypes.string,
  strMeasure7: PropTypes.string,
  strIngredient8: PropTypes.string,
  strMeasure8: PropTypes.string,
  strIngredient9: PropTypes.string,
  strMeasure9: PropTypes.string,
  strIngredient10: PropTypes.string,
  strMeasure10: PropTypes.string,
  strIngredient11: PropTypes.string,
  strMeasure11: PropTypes.string,
  strIngredient12: PropTypes.string,
  strMeasure12: PropTypes.string,
  strIngredient13: PropTypes.string,
  strMeasure13: PropTypes.string,
  strIngredient14: PropTypes.string,
  strMeasure14: PropTypes.string,
  strIngredient15: PropTypes.string,
  strMeasure15: PropTypes.string,
  forceDetails: PropTypes.bool
};

export default connect(mapStateToProps)(RecipeContainer);
