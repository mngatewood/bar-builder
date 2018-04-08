export const addRecipes = (recipes) => ({
  type: 'ADD_RECIPES',
  recipes
});

export const addCategories = (categories) => ({
  type: 'ADD_CATEGORIES',
  categories
});

export const addIngredients = (ingredients) => ({
  type: 'ADD_INGREDIENTS',
  ingredients
});

export const addAlcoholicOptions = (alcoholicOptions) => ({
  type: 'ADD_ALCOHOLIC_OPTIONS',
  alcoholicOptions
});

export const addIngredient = (ingredient) => ({
  type: 'ADD_INGREDIENT',
  ingredient
});

export const removeIngredient = (ingredient) => ({
  type: 'REMOVE_INGREDIENT',
  ingredient
});

