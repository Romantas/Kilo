import { LOGIN, LOGOUT } from './constants';
import history from '../../utils/history';

export function loginAction(email) {
  history.push('/chat');
  return { type: LOGIN, email };
}

export function logOutAction() {
  history.push('/');
  return { type: LOGOUT };
}
