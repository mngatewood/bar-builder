export const sortCategories = (first, second) => {
  if (first.strCategory < second.strCategory)
    return -1;
  if (first.strCategory > second.strCategory)
    return 1;
  return 0;
};