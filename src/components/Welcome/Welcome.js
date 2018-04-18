import React from 'react';
import './Welcome.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Recipe } from '../Recipe/Recipe';

export const Welcome = ({recipes}) => {
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
      forceDetails={false} />;
  });

  return  (
    <div className="welcome-container">
      <div className="page-title-wrapper">
        <div className="page-title">
          <h2>Welcome</h2>
        </div>
      </div>
      <div className="contents-container">
        <div className="welcome-title">
          <h1>Welcome to The Bar Builder</h1>
        </div>
        <div className="guide-left">
          <div className="guide1">
            <p className="filterGuide">
              Click on a filter above to display recipes of a particular 
              category, ingredient, or alcoholic content.
            </p>
            <div className="arrow1">
              <div className="curve1"></div>
              <div className="point1"></div>
            </div>
          </div>
          <div className="guide2">
            <p className="summaryGuide">
              Hover over a drink to view ingredients 
              or click to view a detailed recipe.
            </p>
          </div>
        </div>
        <div className="guide3">
          <p className="inventoryGuide">
            Click on &quot;Update My Inventory&quot; 
            below to select ingredients that you own.
          </p>
          <div className="arrow3">
            <div className="curve3"></div>
            <div className="point3"></div>
          </div>
        </div>
        <div className="guide4">
          <p className="menuGuide">
            Then click &quot;View My Bar Menu&quot; 
            to see recipes that you can make.
          </p>
          <div className="arrow4">
            <div className="curve4"></div>
            <div className="point4"></div>
          </div>
        </div>
        <div className="recipe-summary-container">
          <div className="arrow2">
            <div className="curve2"></div>
            <div className="point2"></div>
          </div>
          {displayRecipe}
        </div>
      </div>
    </div>
  );
};

export const mapStateToProps = (state) => ({
  recipes: state.recipes
});

Welcome.propTypes = {
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

export default connect(mapStateToProps)(Welcome);
