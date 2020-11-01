import React from 'react';

//Redux
import { useDispatch } from 'react-redux';
import { toggleDrawerAction } from '../services/chat/actions';

//Material ui
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

//Material ui icons
import MenuIcon from '@material-ui/icons/Menu';

//components
import DrawerComponent from './DrawerComponent';
import NewChatButton from './NewChatButton';

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: '#343434',
  },
  toolbar: {
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      justifyContent: 'center',
    },
  },
  menuIcon: {
    fill: '#6EF2CA',
  },
  title: {
    flexGrow: 1,
    color: '#EBEBEB',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
}));

export default function ChatSideHeader() {
  //redux dispatch
  const dispatch = useDispatch();

  //call redux to toggle drawer
  const toggleDrawer = (e) => {
    dispatch(toggleDrawerAction());
  };

  //styles
  const classes = useStyles();
  return (
    <>
      <AppBar position="static" className={classes.header}>
        <Toolbar className={classes.toolbar}>
          <IconButton edge="start" aria-label="menu" onClick={toggleDrawer}>
            <MenuIcon className={classes.menuIcon} />
          </IconButton>
          <Typography variant="h5" className={classes.title}>
            ChatApp
          </Typography>
          <NewChatButton />
        </Toolbar>
      </AppBar>
      <DrawerComponent />
    </>
  );
}
