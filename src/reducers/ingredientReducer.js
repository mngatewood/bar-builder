const ingredientReducer = (state = [], action) => {
  switch (action.type) {
  case 'ADD_INGREDIENTS':
    return [...state, ...action.ingredients];
  default:
    return state;
  }
};

export default ingredientReducer; 