import React from 'react';

//Material ui
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  header: {
    boxShadow: 'none',
  },
}));

export default function Header() {
  //styles
  const classes = useStyles();
  return (
    <>
      <AppBar position="static" color="transparent" className={classes.header}>
        <Toolbar>
          <Typography variant="h4">ChatApp</Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}
