export const updateFilterCount = (categoryRecipes, ingredientRecipes, alcoholicRecipes) => {
  let numberOfArrays = 0;
  if (categoryRecipes.length > 0) { numberOfArrays++; }
  if (ingredientRecipes.length > 0) { numberOfArrays++; }
  if (alcoholicRecipes.length > 0) { numberOfArrays++; }
  return numberOfArrays;
};
