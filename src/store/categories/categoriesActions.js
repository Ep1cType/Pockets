import { EDIT_CATEGORIES, SET_CATEGORIES } from './categoriesTypes';

export const setCategoriesList = (caregories) => {
  return {
    type: SET_CATEGORIES,
    payload: caregories,
  };
};

export const editCategories = (newCategory) => {
  return {
    type: EDIT_CATEGORIES,
    payload: newCategory,
  };
};
