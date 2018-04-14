export const sortIngredients = (first, second) => {
  if (first.strIngredient1 < second.strIngredient1)
    return -1;
  if (first.strIngredient1 > second.strIngredient1)
    return 1;
  return 0;
}
