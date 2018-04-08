const inventoryReducer = (state = [], action) => {
  switch (action.type) {
  case 'ADD_INGREDIENT':
    console.log("add")
    return [...state, action.ingredient];
  case 'REMOVE_INGREDIENT':
    console.log("remove")
    return state.filter(ingredient => 
      ingredient !== action.ingredient);
  default:
    return state;
  }
};

export default inventoryReducer; 