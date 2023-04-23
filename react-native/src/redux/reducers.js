import { NAME_ACTION } from './actions';

const initialState = {
  _click: 0,
};

const rootReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case NAME_ACTION.CLICK_UPGRADE:
      return { ...state, _click: state._click + 1 };

    default:
      return { ...state };
  }
};

export default rootReducer;
