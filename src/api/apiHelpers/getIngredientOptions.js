import React from 'react';

export const getIngredientOptions = (sortedIngredients) => {
  return sortedIngredients.map(option => {
    if (option.strIngredient1 !== null) {
      return <option
        key={option.strIngredient1}
        value={option.strIngredient1}>
        {option.strIngredient1}
      </option>;
    }
  });
};
