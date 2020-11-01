import React, { useEffect } from 'react';

//Redux
import { useDispatch } from 'react-redux';
import { getChatAction } from '../services/chat/actions';

//Material ui
import Grid from '@material-ui/core/Grid';

//Components
import ChatSide from '../containers/ChatSide';
import ChatBox from '../components/ChatBox';

export default function ChatPage() {
  //redux dispatch
  const dispatch = useDispatch();

  //call redux action on component mount
  useEffect(() => {
    dispatch(getChatAction());
  }, []);
  return (
    <>
      <Grid container>
        <Grid item xs={2} sm={2} md={3}>
          <ChatSide />
        </Grid>
        <Grid item xs={10} sm={10} md={9}>
          <ChatBox />
        </Grid>
      </Grid>
    </>
  );
}
