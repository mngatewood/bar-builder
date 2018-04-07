const ingredientReducer = (state = [], action) => {
  switch (action.type) {
  case 'ADD_INGREDIENT_OPTIONS':
    return [...state, ...action.ingredientOptions];
  default:
    return state;
  }
};

export default ingredientReducer; 