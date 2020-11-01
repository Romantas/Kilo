import { select, put, takeLatest, takeEvery, call } from 'redux-saga/effects';
import { getChatData, postChatData } from '../../API/chats';
import {
  FETCH_CHAT,
  FETCH_CHAT_SUCCESS,
  POST_CHAT,
  POST_NEW_CHAT,
} from './constants';
import {
  postChatSuccessAction,
  getChatErrorAction,
  postChatErrorAction,
  postNewChatErrorAction,
} from './actions';

//Saga for getting chat data from jsonbin
function* fetchChat() {
  try {
    const { data } = yield call(getChatData);
    yield put({ type: FETCH_CHAT_SUCCESS, data });
  } catch (e) {
    yield put(getChatErrorAction(e.message));
  }
}
//Saga for posting new chats to jsonbin
function* postNewMessage() {
  const state = yield select((state) => state.chatsStore);
  try {
    //add newMessage to chats variable
    const res = yield call(postChatData, state.chats);
    yield put(postChatSuccessAction(res.data.data));
  } catch (e) {
    yield put(postChatErrorAction(e.message));
  }
}
function* postNewChat() {
  const state = yield select((state) => state.chatsStore);
  try {
    //add newMessage to chats variable
    const res = yield call(postChatData, state.chats);
    yield put(postChatSuccessAction(res.data.data));
  } catch (e) {
    yield put(postNewChatErrorAction(e.message));
  }
}

export default function* chatSaga() {
  yield takeLatest(FETCH_CHAT, fetchChat);
  yield takeEvery(POST_CHAT, postNewMessage);
  yield takeLatest(POST_NEW_CHAT, postNewChat);
}
