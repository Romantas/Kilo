import { createSelector } from 'reselect';
import { initialState } from './reducer';

const chatsSelector = (state) => state.chatsStore || initialState;

//Export getMessages to get messages of chat
export const getMessages = createSelector([chatsSelector], (chatsStore) => {
  //To check if chats is loaded from jsonbin
  if (chatsStore.chats.length === 0) {
    return [];
  }
  return chatsStore.chats[chatsStore.currentChat].messages;
});

export const getChatName = createSelector([chatsSelector], (chatsStore) => {
  //To check if chats is loaded from jsonbin
  if (chatsStore.chats.length === 0) {
    return '';
  }
  return chatsStore.chats[chatsStore.currentChat].chatName;
});
