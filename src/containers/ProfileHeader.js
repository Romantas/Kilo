import React from 'react';

//Redux
import { useDispatch } from 'react-redux';
import { toggleDrawerAction } from '../services/chat/actions';

//Material ui
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';

//Material ui icons
import MenuIcon from '@material-ui/icons/Menu';

//Components
import DrawerComponent from './DrawerComponent';

const useStyles = makeStyles((theme) => ({
  header: {
    background: '#616161',
  },
  title: {
    color: '#ffffff',
    marginLeft: theme.spacing(2),
  },
  menuIcon: {
    fill: '#6EF2CA',
  },
}));

export default function ProfileHeader() {
  //redux dispatch
  const dispatch = useDispatch();

  //call redux to toggle drawer
  const toggleDrawer = () => {
    dispatch(toggleDrawerAction());
  };

  //styles
  const classes = useStyles();
  return (
    <>
      <AppBar position="static" className={classes.header}>
        <Toolbar>
          <IconButton edge="start" aria-label="menu">
            <MenuIcon className={classes.menuIcon} onClick={toggleDrawer} />
          </IconButton>
          <Typography variant="h5" className={classes.title}>
            My profile
          </Typography>
        </Toolbar>
      </AppBar>
      <DrawerComponent />
    </>
  );
}
