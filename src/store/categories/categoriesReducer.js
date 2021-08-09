import { SET_CATEGORIES } from './categoriesTypes';

let initialState = {
  categoriesList: [],
};

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORIES: {
      return {
        ...state,
        categoriesList: action.payload,
      };
    }
    default:
      return state;
  }
};

export default categoriesReducer;
