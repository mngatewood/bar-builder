import React from 'react';
import './Welcome.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter} from 'react-router-dom';
import { Recipe } from '../Recipe/Recipe';

const Welcome = ({recipes}) => {
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
      measure15={recipe.strMeasure15}
      forceDetails={recipes.length === 1} />;
  });

  // console.log(recipes.strDrink);

  // const { strDrink,
  //   strDrinkThumb,
  //   strCategory,
  //   strAlcoholic,
  //   strGlass,
  //   strInstructions,
  //   strIngredient1,
  //   strMeasure1,
  //   strIngredient2,
  //   strMeasure2,
  //   strIngredient3,
  //   strMeasure3,
  //   strIngredient4,
  //   strMeasure4,
  //   strIngredient5,
  //   strMeasure5,
  //   strIngredient6,
  //   strMeasure6,
  //   strIngredient7,
  //   strMeasure7,
  //   strIngredient8,
  //   strMeasure8,
  //   strIngredient9,
  //   strMeasure9,
  //   strIngredient10,
  //   strMeasure10,
  //   strIngredient11,
  //   strMeasure11,
  //   strIngredient12,
  //   strMeasure12,
  //   strIngredient13,
  //   strMeasure13,
  //   strIngredient14,
  //   strMeasure14,
  //   strIngredient15,
  //   strMeasure15 } = recipes;

  return  (
    <div className="recipe-details-container">
    {displayRecipe}
    </div>
  );
};

export const mapStateToProps = (state) => ({
  recipes: state.recipes
});

Welcome.propTypes = {
  recipes: PropTypes.array
};

export default withRouter(connect(mapStateToProps)(Welcome));
