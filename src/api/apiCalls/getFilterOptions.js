export const getFilterOptions = async (filterType) => {
  const urlRoot = 'https://www.thecocktaildb.com/api/json/v1/1/';
  const urlQuery = 'list.php?';
  const url = `${urlRoot}${urlQuery}${filterType}=list`;
  try {
    const response = await fetch(url);
    const filterOptions = await response.json();
    return filterOptions.drinks;
  } catch (error) {
    throw Error("Error retrieving options: " + error.message);
  }
};

