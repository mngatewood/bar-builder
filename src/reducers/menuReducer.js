const menuReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MENU_RECIPES':
      return [...state, ...action.recipes];
    case 'CLEAR_MENU_RECIPES':
      return [];
    default:
      return state;
  }
};

export default menuReducer; 