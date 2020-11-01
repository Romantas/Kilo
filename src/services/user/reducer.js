import { produce } from 'immer';
import { LOGIN, LOGOUT } from './constants';
const initialState = {
  email: null,
};
/* eslint-disable default-case, no-param-reassign */
const userReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case LOGIN:
        draft.email = action.email;
        break;
      case LOGOUT:
        draft.email = null;
        break;
    }
  });

export default userReducer;
