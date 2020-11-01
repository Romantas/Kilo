import { combineReducers } from 'redux';
import userReducer from '../services/user/reducer';
import chatReducer from '../services/chat/reducer';

export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    user: userReducer,
    chatsStore: chatReducer,
  });

  return rootReducer;
}
