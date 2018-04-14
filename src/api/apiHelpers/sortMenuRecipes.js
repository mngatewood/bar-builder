export const sortMenuRecipes = (first, second) => {
  if (first.strDrink < second.strDrink)
    return -1;
  if (first.strDrink > second.strDrink)
    return 1;
  return 0;
};