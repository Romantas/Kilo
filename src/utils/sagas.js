import { all } from 'redux-saga/effects';
import chatSaga from '../services/chat/saga';
export default function* rootSaga() {
  yield all([chatSaga()]);
}
