import React from 'react';
import './Welcome.css';
import PropTypes from 'prop-types';
import { withRouter} from 'react-router-dom';
import { connect } from 'react-redux';

const Welcome = ({recipes}) => {

  console.log(recipes.strDrink);

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

  return  <div className="recipe-details-container">
{/*    <div className="recipe-details">
      <div className="cocktail-image-container">
        <img className="cocktail-image-large" src={strDrinkThumb} alt="cocktail" />
      </div>
     <div className="instructions-table-container">
        <h1>{name}</h1>
        <button onClick={this.toggleRecipeDetails}>X</button>
        <table className="instructions-table">
          <tbody>
            <tr>
              <td className="table-category">Category: </td>
              <td className="table-text">{category}</td>
            </tr>
            <tr>
              <td className="table-category">Alcoholic: </td>
              <td className="table-text">{alcoholic}</td>
            </tr>
            <tr>
              <td className="table-category">Glass: </td>
              <td className="table-text">{glass}</td>
            </tr>
            <tr>
              <td className="table-category" colSpan="2">Instructions: </td>
            </tr>
            <tr>
              <td className="table-text" colSpan="2">{instructions}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="ingredients-table-container">
        <table className="ingredients-table">
          <tbody>
            <tr>
              <td className="table-category" colSpan="2">Ingredients: </td>
            </tr>
            <tr>
              <td>{ingredient1}</td>
              <td>{measure1}</td>
            </tr>
            <tr>
              <td>{ingredient2}</td>
              <td>{measure2}</td>
            </tr>
            <tr>
              <td>{ingredient3}</td>
              <td>{measure3}</td>
            </tr>
            <tr>
              <td>{ingredient4}</td>
              <td>{measure4}</td>
            </tr>
            <tr>
              <td>{ingredient5}</td>
              <td>{measure5}</td>
            </tr>
            <tr>
              <td>{ingredient6}</td>
              <td>{measure6}</td>
            </tr>
            <tr>
              <td>{ingredient7}</td>
              <td>{measure7}</td>
            </tr>
            <tr>
              <td>{ingredient8}</td>
              <td>{measure8}</td>
            </tr>
            <tr>
              <td>{ingredient9}</td>
              <td>{measure9}</td>
            </tr>
            <tr>
              <td>{ingredient10}</td>
              <td>{measure10}</td>
            </tr>
            <tr>
              <td>{ingredient11}</td>
              <td>{measure11}</td>
            </tr>
            <tr>
              <td>{ingredient12}</td>
              <td>{measure12}</td>
            </tr>
            <tr>
              <td>{ingredient13}</td>
              <td>{measure13}</td>
            </tr>
            <tr>
              <td>{ingredient14}</td>
              <td>{measure14}</td>
            </tr>
            <tr>
              <td>{ingredient15}</td>
              <td>{measure15}</td>
            </tr>
          </tbody>
        </table>
      </div>
  </div> */}
  </div>;
};

export const mapStateToProps = (state) => ({
  recipes: state.recipes[0]
});

Welcome.propTypes = {
  recipes: PropTypes.array
};

export default withRouter(connect(mapStateToProps)(Welcome));
