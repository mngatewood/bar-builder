const categoryReducer = (state = [], action) => {
  switch (action.type) {
  case 'ADD_CATEGORIES':
    return [...state, ...action.categories];
  default:
    return state;
  }
};

export default categoryReducer; 