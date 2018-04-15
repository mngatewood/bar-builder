export const updateFilterCount = (props) => {
  const { categoryRecipes, ingredientRecipes, alcoholicRecipes } = props;
  let numberOfArrays = 0;
  if (categoryRecipes.length > 0) { numberOfArrays++; }
  if (ingredientRecipes.length > 0) { numberOfArrays++; }
  if (alcoholicRecipes.length > 0) { numberOfArrays++; }
  return { filterCount: numberOfArrays }
};
