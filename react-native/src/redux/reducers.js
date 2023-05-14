import { NAME_ACTION } from './actions';

const initialState = {
  _click: 0,
  _TodoList: [],
};

const rootReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case NAME_ACTION.CLICK_UPGRADE:
      return { ...state, _click: state._click + 1 };
    case NAME_ACTION.ADD_TODO_TASK:
      return { ...state, _TodoList: [...state._TodoList, payload] }
    case NAME_ACTION.REMOVE_TODO_TASK:
      const arrTmp = state._TodoList
      if (payload !== -1) {
        arrTmp.splice(payload, 1)
      }
      return { ...state, _TodoList: [...arrTmp] }
    default:
      return state;

  }
};

export default rootReducer;
