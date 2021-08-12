import $api from '../api';

export default class WidgetsService {
  static getWidgets() {
    return $api.get('/pockets/widgets/');
  }
  static createWidget(category, limit, validity, criterion, color) {
    return $api.post('/pockets/widgets/', { category, limit, validity, criterion, color });
  }
  static deleteWidget(widget_id) {
    return $api.delete(`/pockets/widgets/${widget_id}`);
  }
}
