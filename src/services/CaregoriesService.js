import { AxiosResponse } from 'axios';

import $api from '../api';

export default class CategoriesService {
  static getCategories(): Promise<AxiosResponse> {
    return $api.get('/pockets/categories/');
  }
  static setCategory(name, category_type): Promise<AxiosResponse> {
    return $api.post('/pockets/categories/', { name, category_type });
  }
}
