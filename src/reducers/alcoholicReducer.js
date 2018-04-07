const alcoholicReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ALCOHOLIC_OPTIONS':
      return [...state, ...action.alcoholicOptions];
    default:
      return state;
  }
};

export default alcoholicReducer; 