import { produce } from 'immer';
import {
  FETCH_CHAT,
  FETCH_CHAT_SUCCESS,
  FETCH_CHAT_ERROR,
  POST_CHAT,
  POST_CHAT_SUCCESS,
  CURRENT_CHAT,
  OPEN_NEW_CHAT_FORM,
  POST_NEW_CHAT,
  POST_NEW_CHAT_ERROR,
  TOGGLE_DRAWER,
  POST_CHAT_ERROR,
} from './constants';
export const initialState = {
  chats: [],
  newMessage: {},
  currentChat: 0,
  createNewChat: false,
  drawer: false,
  error: null,
};

/* eslint-disable default-case, no-param-reassign */
const chatReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case FETCH_CHAT:
        draft.error = null;
        break;
      case FETCH_CHAT_SUCCESS:
        draft.chats = action.data;
        break;
      case FETCH_CHAT_ERROR:
        draft.error = action.message;
        break;
      case POST_CHAT:
        draft.error = null;
        draft.chats[state.currentChat].messages.push({
          user: action.user,
          message: action.newMessage,
        });
        break;
      case POST_CHAT_SUCCESS:
        draft.chats = action.data;
        break;
      case POST_CHAT_ERROR:
        draft.error = action.message;
        draft.chats[state.currentChat].messages.pop();
        break;
      case CURRENT_CHAT:
        draft.currentChat = action.currentChat;
        //When user wants to create new chat, but clicks one of existing chats
        draft.createNewChat = false;
        break;
      case OPEN_NEW_CHAT_FORM:
        draft.createNewChat = true;
        //When user clicks add new chat button to toggle drawer
        draft.drawer = false;
        break;
      case POST_NEW_CHAT:
        draft.error = null;
        draft.chats.push({ chatName: action.chatName, messages: [] });
        break;
      case POST_NEW_CHAT_ERROR:
        draft.error = action.message;
        draft.chats.pop();
        break;
      case TOGGLE_DRAWER:
        draft.drawer = !state.drawer;
    }
  });

export default chatReducer;
