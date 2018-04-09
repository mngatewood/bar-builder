const inventoryReducer = (state = [], action) => {
  switch (action.type) {
  case 'ADD_INGREDIENT':
    return [...state, action.ingredient];
  case 'REMOVE_INGREDIENT':
    return state.filter(ingredient => 
      ingredient !== action.ingredient);
  default:
    return state;
  }
};

export default inventoryReducer; 