import React from 'react';

//Redux
import { useSelector, useDispatch } from 'react-redux';
import { changeCurrentChatAction } from '../services/chat/actions';

//Material ui
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

//Components
import ChatSideHeader from '../containers/ChatSideHeader';
import ChatSideItem from '../components/ChatSideItem';

const useStyles = makeStyles((theme) => ({
  grid: {
    display: 'block',
    backgroundColor: '#474747',
    height: 'calc(100vh - 64px)',
    flexDirection: 'row',
    overflowY: 'auto',
    [theme.breakpoints.down('sm')]: {
      height: 'calc(100vh - 56px)',
    },
  },
  title: {
    marginBottom: theme.spacing(2),
  },
  itemsContainer: {},
}));

export default function ChatSide() {
  const classes = useStyles();

  //redux selectors
  const chats = useSelector((state) =>
    state.chatsStore.chats.map((chat) => chat.chatName),
  );
  const currentChat = useSelector((state) => state.chatsStore.currentChat);

  //redux dispatch
  const dispatch = useDispatch();

  //function that changes current chat
  const changeChat = (index) => {
    dispatch(changeCurrentChatAction(index));
  };

  return (
    <>
      <ChatSideHeader />
      <Grid container className={classes.grid} direction="column">
        <div className={classes.itemsContainer}>
          {chats.map((name, index) => (
            <div key={`${name}_${index}`}>
              <ChatSideItem
                title={name}
                current={currentChat === index}
                onClick={() => {
                  changeChat(index);
                }}
              />
            </div>
          ))}
        </div>
      </Grid>
    </>
  );
}
