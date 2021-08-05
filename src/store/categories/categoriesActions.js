import { SET_CATEGORIES } from './categoriesTypes';

export const setCategoriesList = (caregories) => {
  return {
    type: SET_CATEGORIES,
    payload: caregories,
  };
};
