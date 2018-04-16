export const sortRecipes = (props) => {
  const { categoryRecipes, ingredientRecipes, alcoholicRecipes } = props;
  // putting props in as parameters fixes test but breaks app
  const unfilteredRecipes = [...categoryRecipes, ...ingredientRecipes, ...alcoholicRecipes];
  const sortedRecipes = unfilteredRecipes.sort((drinkA, drinkB) =>
    drinkA.idDrink - drinkB.idDrink);
  return { unfilteredRecipes: sortedRecipes };
};
