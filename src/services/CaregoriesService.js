import $api from '../api';

export default class CategoriesService {
  static getCategories() {
    return $api.get('/pockets/categories/');
  }
  static setCategory(name, category_type) {
    return $api.post('/pockets/categories/', { name, category_type });
  }
  static editCategory(category_id, newCategory) {
    return $api.patch(`/pockets/categories/${category_id}/`, newCategory);
  }
}
