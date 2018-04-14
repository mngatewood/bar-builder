const recipeReducer = (state = [], action) => {
  switch (action.type) {
  case 'ADD_RECIPES':
    return [...action.recipes];
  case 'CLEAR_RECIPES':
    return [];
  default:
    return state;
  }
};

export default recipeReducer; 