const recipeReducer = (state = [], action) => {
  switch (action.type) {
  case 'ADD_RECIPES':
    return [...state, ...action.recipes];
  default:
    return state;
  }
};

export default recipeReducer; 