import React from 'react';

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
  return <div>
    <h4>{name}</h4>
    <img src={thumbnail} alt="drink image" />
    <p>{measure1} &nbsp; {ingredient1}</p>
    <p>{measure2} &nbsp; {ingredient2}</p>
    <p>{measure3} &nbsp; {ingredient3}</p>
    <p>{measure4} &nbsp; {ingredient4}</p>
    <p>{measure5} &nbsp; {ingredient5}</p>
    <p>{measure6} &nbsp; {ingredient6}</p>
    <p>{measure7} &nbsp; {ingredient7}</p>
  </div>
}
