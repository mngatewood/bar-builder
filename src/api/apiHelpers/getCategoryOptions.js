import React from 'react';

export const getCategoryOptions = (sortedCategories) => {
  return sortedCategories.map(option => {
    if (option.strCategory !== null) {
      return <option
        key={option.strCategory}
        value={option.strCategory}>
        {option.strCategory}
      </option>;
    } else {
      return null;
    }
  });
};
