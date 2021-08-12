import { SET_WIDGETS, ADD_WIDGET, DELETE_WIDGET } from './widgetsTypes';

export const setWidgetsList = (widgets) => {
  return {
    type: SET_WIDGETS,
    payload: widgets,
  };
};

export const deleteWidget = (id) => {
  return {
    type: DELETE_WIDGET,
    payload: id,
  };
};

export const addWidget = (widget) => {
  return {
    type: ADD_WIDGET,
    payload: widget,
  };
};
