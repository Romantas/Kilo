import React from 'react';

//React router
import { Link } from 'react-router-dom';

//Redux
import { useDispatch } from 'react-redux';
import { toggleDrawerAction } from '../services/chat/actions';

//Material ui
import { makeStyles } from '@material-ui/core/styles';

//Components
import NewChatButton from './NewChatButton';
import LogoutButton from './LogoutButton';

const useStyles = makeStyles((theme) => ({
  itemsContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: theme.spacing(4),
  },
  item: {
    fontSize: '2rem',
    fontWeight: 300,
    color: '#ffffff',
    textDecoration: 'none',
    marginBottom: theme.spacing(3),
    cursor: 'pointer',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));

export default function NavigationItems() {
  //redux dispatch
  const dispatch = useDispatch();

  //call redux to toggle drawer when route changes
  const toggleDrawer = (e) => {
    dispatch(toggleDrawerAction());
  };

  //styles
  const classes = useStyles();
  return (
    <div className={classes.itemsContainer}>
      <NewChatButton drawer />
      <Link to={'/profile'} className={classes.item} onClick={toggleDrawer}>
        Profile
      </Link>
      <Link to={'/chat'} className={classes.item} onClick={toggleDrawer}>
        Messages
      </Link>
      <LogoutButton className={classes.item} />
    </div>
  );
}
