import { EDIT_CATEGORIES, SET_CATEGORIES } from './categoriesTypes';

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
    case EDIT_CATEGORIES: {
      return {
        ...state,
        categoriesList: state.categoriesList.map((el) => (el.id === action.payload.id ? action.payload : el)),
      };
    }
    default:
      return state;
  }
};

export default categoriesReducer;
