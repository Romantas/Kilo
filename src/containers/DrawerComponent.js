import React from 'react';

//Redux
import { useSelector, useDispatch } from 'react-redux';
import { toggleDrawerAction } from '../services/chat/actions';

//Material ui
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

//Material ui icon
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

//components
import NavigationItems from './NavigationItems';

const useStyles = makeStyles((theme) => ({
  drawer: {
    background: '#474747',
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  title: {
    marginLeft: theme.spacing(3),
    color: '#EBEBEB',
  },
  divider: {
    flexGrow: 1,
  },
  drawerList: {
    marginTop: theme.spacing(3),
    width: 320,
    [theme.breakpoints.down('sm')]: {
      width: '100vw',
      marginTop: theme.spacing(2),
    },
  },
}));

export default function DrawerComponent() {
  //redux selectors
  const open = useSelector((state) => state.chatsStore.drawer);

  //redux dispatch
  const dispatch = useDispatch();

  //call redux to toggle drawer
  const toggleDrawer = (e) => {
    if (e.type === 'keydown' && (e.key === 'Tab' || e.key === 'Shift')) {
      return;
    }
    dispatch(toggleDrawerAction());
  };

  //styles
  const classes = useStyles();
  return (
    <Drawer
      ancher="left"
      open={open}
      onClose={toggleDrawer}
      PaperProps={{ classes: { root: classes.drawer } }}
    >
      <div className={classes.drawerHeader}>
        <Typography variant="h5" className={classes.title}>
          ChatApp
        </Typography>
        <div className={classes.divider}></div>
        <IconButton onClick={toggleDrawer}>
          <ChevronLeftIcon style={{ fill: '#fff' }} />
        </IconButton>
      </div>
      <div className={classes.drawerList}>
        <NavigationItems />
      </div>
    </Drawer>
  );
}
