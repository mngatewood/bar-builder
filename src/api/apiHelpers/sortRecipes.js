export const sortRecipes = (categoryRecipes, ingredientRecipes, alcoholicRecipes) => {
  const unfilteredRecipes = [...categoryRecipes, ...ingredientRecipes, ...alcoholicRecipes];
  const sortedRecipes = unfilteredRecipes.sort((drinkA, drinkB) =>
    drinkA.idDrink - drinkB.idDrink);
  return sortedRecipes;
};
