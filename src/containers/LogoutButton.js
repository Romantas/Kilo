import React from 'react';

//Redux
import { useDispatch } from 'react-redux';
import { logOutAction } from '../services/user/actions';
import { toggleDrawerAction } from '../services/chat/actions';

//Material ui
import { Typography } from '@material-ui/core/';
export default function LogoutButton({ className }) {
  //redux dispatch
  const dispatch = useDispatch();

  //Function that log out user
  const logout = () => {
    dispatch(logOutAction());
    //To close drawer after login (set drawer to false)
    dispatch(toggleDrawerAction());
  };
  return (
    <Typography variant="h5" className={className} onClick={logout}>
      Log out
    </Typography>
  );
}
