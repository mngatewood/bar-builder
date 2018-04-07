const categoryReducer = (state = [], action) => {
  switch (action.type) {
  case 'ADD_CATEGORY_OPTIONS':
    return [...state, ...action.categoryOptions];
  default:
    return state;
  }
};

export default categoryReducer; 