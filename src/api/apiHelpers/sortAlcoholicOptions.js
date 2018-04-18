export const sortAlcoholicOptions = (first, second) => {
  if (first.strAlcoholic < second.strAlcoholic)
    return -1;
  if (first.strAlcoholic > second.strAlcoholic)
    return 1;
  return 0;
};
