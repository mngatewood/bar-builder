import React, { Component } from 'react';
import './Recipe.css';
import PropTypes from 'prop-types';

export class Recipe extends Component {
  constructor(props) {
    super(props);

    this.state = {
      detailsHidden: true
    };
  }

  toggleRecipeDetails = () => {
    this.setState({ detailsHidden: !this.state.detailsHidden });
  }

  render() {
    const { name,
      thumbnail,
      category,
      alcoholic,
      glass,
      instructions,
      ingredient1,
      measure1,
      ingredient2,
      measure2,
      ingredient3,
      measure3,
      ingredient4,
      measure4,
      ingredient5,
      measure5,
      ingredient6,
      measure6,
      ingredient7,
      measure7,
      ingredient8,
      measure8,
      ingredient9,
      measure9,
      ingredient10,
      measure10,
      ingredient11,
      measure11,
      ingredient12,
      measure12,
      ingredient13,
      measure13,
      ingredient14,
      measure14,
      ingredient15,
      measure15 } = this.props;
    const { detailsHidden } = this.state;
      console.log(detailsHidden);
    return <div className="recipe-summary" onClick={this.toggleRecipeDetails}>
      <h4>{name}</h4>
      <img className="recipe-image" src={thumbnail} alt="cocktail" />
      <div className="ingredient-list hidden">
        <h4>Ingredients:</h4>
        <p>{measure1}&nbsp;{ingredient1}</p>
        <p>{measure2}&nbsp;{ingredient2}</p>
        <p>{measure3}&nbsp;{ingredient3}</p>
        <p>{measure4}&nbsp;{ingredient4}</p>
        <p>{measure5}&nbsp;{ingredient5}</p>
        <p>{measure6}&nbsp;{ingredient6}</p>
        <p>{measure7}&nbsp;{ingredient7}</p>
        <p>{measure8}&nbsp;{ingredient8}</p>
        <p>{measure9}&nbsp;{ingredient9}</p>
        <p>{measure10}&nbsp;{ingredient10}</p>
        <p>{measure11}&nbsp;{ingredient11}</p>
        <p>{measure12}&nbsp;{ingredient12}</p>
        <p>{measure13}&nbsp;{ingredient13}</p>
        <p>{measure14}&nbsp;{ingredient14}</p>
        <p>{measure15}&nbsp;{ingredient15}</p>
      </div>
      <div className="recipe-details-container" hidden={detailsHidden}>
        <div className="recipe-details">
          <div className="cocktail-image-container">
            <img className="cocktail-image-large" src={thumbnail} alt="cocktail" />
          </div>
          <div className="recipe-text-container">
            <h1>{name}</h1>
            <button onClick={this.toggleRecipeDetails}>X</button>
            <div className="tables-container">
              <table className="instructions-table">
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
              </table>
              <table className="ingredients-table">
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
              </table>     
            </div>
          </div>
        </div>
      </div>
    </div>;
  }
}

Recipe.propTypes = {
  name: PropTypes.string,
  thumbnail: PropTypes.string,
  category: PropTypes.string,
  alcoholic: PropTypes.string,
  glass: PropTypes.string,
  instructions: PropTypes.string,
  ingredient1: PropTypes.string,
  measure1: PropTypes.string,
  ingredient2: PropTypes.string,
  measure2: PropTypes.string,
  ingredient3: PropTypes.string,
  measure3: PropTypes.string,
  ingredient4: PropTypes.string,
  measure4: PropTypes.string,
  ingredient5: PropTypes.string,
  measure5: PropTypes.string,
  ingredient6: PropTypes.string,
  measure6: PropTypes.string,
  ingredient7: PropTypes.string,
  measure7: PropTypes.string,
  ingredient8: PropTypes.string,
  measure8: PropTypes.string,
  ingredient9: PropTypes.string,
  measure9: PropTypes.string,
  ingredient10: PropTypes.string,
  measure10: PropTypes.string,
  ingredient11: PropTypes.string,
  measure11: PropTypes.string,
  ingredient12: PropTypes.string,
  measure12: PropTypes.string,
  ingredient13: PropTypes.string,
  measure13: PropTypes.string,
  ingredient14: PropTypes.string,
  measure14: PropTypes.string,
  ingredient15: PropTypes.string,
  measure15: PropTypes.string
};
