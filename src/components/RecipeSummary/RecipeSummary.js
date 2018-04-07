import React from 'react';
import './RecipeSummary.css'

export const RecipeSummary = (recipe) => {
  const { name, 
    thumbnail, 
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
  </div>
}
