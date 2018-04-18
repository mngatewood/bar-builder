const inventoryReducer = (state = [], action) => {
  switch (action.type) {
  case 'ADD_INGREDIENT':
    return [...state, action.ingredient];
  case 'REMOVE_INGREDIENT':
    return state.filter(ingredient => 
      ingredient.strIngredient1 !== action.ingredient.strIngredient1);
  default:
    return state;
  }
};

export default inventoryReducer; 