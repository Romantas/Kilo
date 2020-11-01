import {
  FETCH_CHAT,
  FETCH_CHAT_ERROR,
  POST_CHAT,
  POST_CHAT_SUCCESS,
  POST_CHAT_ERROR,
  CURRENT_CHAT,
  OPEN_NEW_CHAT_FORM,
  POST_NEW_CHAT,
  POST_NEW_CHAT_ERROR,
  TOGGLE_DRAWER,
} from './constants';

export function getChatAction() {
  return { type: FETCH_CHAT };
}

export function getChatErrorAction(message) {
  return { type: FETCH_CHAT_ERROR, message };
}
export function postChatAction(user, newMessage) {
  return { type: POST_CHAT, user, newMessage };
}

export function postChatSuccessAction(data) {
  return { type: POST_CHAT_SUCCESS, data };
}

export function postChatErrorAction(message) {
  return { type: POST_CHAT_ERROR, message };
}

export function changeCurrentChatAction(currentChat) {
  return { type: CURRENT_CHAT, currentChat };
}

export function openNewChatFormAction() {
  return { type: OPEN_NEW_CHAT_FORM };
}

export function postNewChatAction(chatName) {
  return { type: POST_NEW_CHAT, chatName };
}
export function postNewChatErrorAction(message) {
  return { type: POST_NEW_CHAT_ERROR, message };
}

export function toggleDrawerAction() {
  return { type: TOGGLE_DRAWER };
}
