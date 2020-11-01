import React from 'react';

//Material ui
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

//components
import ChatBoxHeader from './ChatBoxHeader';
import MessageBox from './MessageBox';
import MessageForm from '../containers/MessageForm';

const useStyles = makeStyles((theme) => ({
  chatContainer: {
    height: 'calc(100vh - 64px)',
    width: '100%',
    overflow: 'hidden',
    [theme.breakpoints.down('sm')]: {
      height: 'calc(100vh - 56px)',
    },
  },
}));

export default function ChatBox() {
  //styles
  const classes = useStyles();
  return (
    <>
      <ChatBoxHeader />
      <Grid container className={classes.chatContainer}>
        <MessageBox />
        <MessageForm />
      </Grid>
    </>
  );
}
