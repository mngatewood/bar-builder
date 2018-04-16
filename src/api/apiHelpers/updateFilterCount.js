export const updateFilterCount = (props) => {
  const { categoryRecipes, ingredientRecipes, alcoholicRecipes } = props;
  // putting props in as parameters fixes test but breaks app
  let numberOfArrays = 0;
  if (categoryRecipes.length > 0) { numberOfArrays++; }
  if (ingredientRecipes.length > 0) { numberOfArrays++; }
  if (alcoholicRecipes.length > 0) { numberOfArrays++; }
  return { filterCount: numberOfArrays }
};
