import React from 'react';

export const getAlcoholicOptions = (sortedAlcoholicOptions) => {
  return sortedAlcoholicOptions.map(option => {
    if (option.strAlcoholic !== null) {
      return <option
        key={option.strAlcoholic}
        value={option.strAlcoholic}>
        {option.strAlcoholic}
      </option>;
    }
  });
};
