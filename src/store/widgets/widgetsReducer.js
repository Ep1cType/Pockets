import { SET_WIDGETS, ADD_WIDGET, DELETE_WIDGET } from './widgetsTypes';

let initialState = {
  widgetList: [],
};

const widgetsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_WIDGETS: {
      return {
        ...state,
        widgetList: action.payload,
      };
    }
    case DELETE_WIDGET: {
      return {
        ...state,
        widgetList: state.widgetList.filter((el) => el.id !== action.payload),
      };
    }
    case ADD_WIDGET: {
      return {
        ...state,
        widgetList: [action.payload, ...state.widgetList],
      };
    }
    default:
      return state;
  }
};

export default widgetsReducer;
