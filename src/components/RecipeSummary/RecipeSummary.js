import React from 'react';
import './RecipeSummary.css'

export const RecipeSummary = (recipe) => {
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
    measure15 } = recipe;
  return <div className="recipe-summary">
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
    <div className="recipe-details hidden">
      <div className="cocktail-image-container">
        <img className="cocktail-image-large" src={thumbnail} alt="cocktail" />
      </div>
      <div className="recipe-text-container">
        <h1>{name}</h1>
        <button>X</button>
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
}
